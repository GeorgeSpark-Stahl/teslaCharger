import fs = require('fs');
import tjs = require('teslajs');
let chump = require('chump');

let teslaTokenFile = fs.readFileSync('.token', 'utf8');
let chumpInfo = JSON.parse(fs.readFileSync('.pushover', 'utf8'));
let token = JSON.parse(teslaTokenFile);

let client  = new chump.Client(chumpInfo.token);
let user    = new chump.User(chumpInfo.user);
let message = new chump.Message({
  title:      'Test: title',
  message:    'Test: message',
  user:       user,
  priority:   new chump.Priority('low')
});

if (token.access_token) {
    token = token.access_token;
}
var options = { 
    authToken: token,
    vehicleID: null,
    vehicle_id: null,
    tokens: null
};
tjs.allVehiclesAsync(options).then(function (vehicles) {
    console.log(vehicles);
    var vehicle = vehicles[0];
    options.vehicleID = vehicle.id_s;
    options.vehicle_id = vehicle.vehicle_id;
    options.tokens = vehicle.tokens;
    return tjs.doorUnlockAsync(options)
}).then(function(unlock) {
    console.log(unlock)
}, function(err) {
    console.log(err);
}).then(() => client.sendMessage(message));
