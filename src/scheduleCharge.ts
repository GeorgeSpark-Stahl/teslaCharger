import fs = require('fs');
import tjs = require('teslajs');
import Promise = require('promise');
import process = require('process');
import chump = require('chump');

let fileStr = fs.readFileSync('.token', 'utf8');
let token = JSON.parse(fileStr);
if (token.access_token) {
    token = token.access_token;
}
var options = { 
    authToken: token,
    vehicleID: null,
    vehicle_id: null,
    tokens: null
};

let requestTime = 7

let chumpInfo = JSON.parse(fs.readFileSync('.pushover', 'utf8'));
let client  = new chump.Client(chumpInfo.token);
let user    = new chump.User(chumpInfo.user);

function checkForChargeAsync() {
    if(!fs.existsSync('request')) {
        return;
    }
    fs.unlinkSync('request')
    
    let now = new Date();
    let tomorrow = new Date();
    tomorrow.setTime(now.getTime() + (24 * 60 * 60 * 1000)); //Tomorrow
    tomorrow.setHours(requestTime+1)
    tomorrow.setMinutes(0, 0, 0)
    console.log('Target Time: ', tomorrow)
    let targetTime = (tomorrow.valueOf() - now.valueOf())/1000/60/60
    console.log('Target Hours: ' + targetTime)
    //let targetTime = Number(process.argv[2])

    client.sendMessage(new chump.Message({
        title: 'TeslaCharge',
        message: "Planning charge to finish: " + Math.round(targetTime) + "hrs from now.",
        user: user
    }))
    .then(() => tjs.allVehiclesAsync(options))
    .then(function (vehicles) {
        let vehicle = vehicles[0];
        options.vehicleID = vehicle.id_s;
        options.vehicle_id = vehicle.vehicle_id;
        options.tokens = vehicle.tokens;
        return tjs.vehicleDataAsync(options)
    }).then(function(vehicleData) {
        let chargeState = vehicleData.charge_state;
        if (chargeState.charging_state == "Charging") {
            // Need to see how long till charging is done.
            // Then stop charging.
            // Schedule charge to end at target time.
            console.log("Charging state: " + "Charging");
            return handleChargedAsync(options, targetTime);
        } else if (chargeState.charging_state == "Disconnected") {
            console.log("Charging State: " + "Unplugged");
        } else {
            //Start Charging, wait for estimate, then do "Charging" State
            console.log("Charging State: " + "Plugged In");
            return tjs.startChargeAsync(options)
                .then(() => client.sendMessage(new chump.Message({
                    title:      'TeslaCharge',
                    message:    "Starting Charge and Waiting 30 seconds.",
                    user:       user
                    })))
                .then(() => console.log('Starting Charge and Waiting 30 seconds.'))
                .then(() => new Promise((resolve) => setTimeout(resolve, 30 * 1000)))
                .then(() => handleChargedAsync(options, targetTime))
        }
    }, (error) => {
        client.sendMessage(new chump.Message({
            title: 'TeslaCharge: Error',
            message: error,
            user: user,
            priority:   new chump.Priority('high')
        }));
        console.log(error)
    })
}

function handleChargedAsync(options, targetTime) {
    tjs.vehicleDataAsync(options).then(function(vehicleData) {
        let chargeState = vehicleData.charge_state;
        if (chargeState.charging_state != "Charging") {
            console.log('Car should be charging, but is not.')
            return  client.sendMessage(new chump.Message({
                title: 'TeslaCharge: Error',
                message: "Car should be charging, but is not.",
                user: user,
                priority:   new chump.Priority('high')
            }));
        }
        let hoursRemaining = Number(chargeState.time_to_full_charge)
        console.log('time to full charge: ' + hoursRemaining)
        let timeDiff = targetTime - hoursRemaining;
        console.log("timeDiff: " + timeDiff)
        let timeDiffSeconds = Math.floor(timeDiff * 60 * 60)
        console.log('timeDiffSeconds: ' + timeDiffSeconds)
        if(timeDiff > 0 ) {
            return tjs.stopChargeAsync(options)
                .then(() => client.sendMessage(new chump.Message({
                    title:      'TeslaCharge',
                    message:    'Stopped Charge and Waiting: ' + Math.floor(timeDiff) + "hrs",
                    user:       user
                    })))
                .then(() => console.log('Stopped Charge and now waiting'))
                .then(() => new Promise((resolve) => setTimeout(resolve, timeDiffSeconds * 1000)))
                .then(() => tjs.startChargeAsync(options))
                .then(() => client.sendMessage(new chump.Message({
                    title:      'TeslaCharge',
                    message:    'Started Charging!',
                    user:       user
                    })))
                .then(() => console.log('Started Charging!'))
        } else {
            console.log("Not Scheduling Charge - end time won't be met.")
            return client.sendMessage(new chump.Message({
                title:      'TeslaCharge',
                message:    "Not Scheduling Charge - end time won't be met.",
                user:       user
                }))
        }
    })
}


setInterval(checkForChargeAsync, 30 * 1000);