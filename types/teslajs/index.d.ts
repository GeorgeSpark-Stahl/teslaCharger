// Type definitions for teslajs 4.0
// Project: https://github.com/mseminatore/TeslaJS#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const API_BODY_LEVEL: number;

export const API_CALL_LEVEL: number;

export const API_ERR_LEVEL: number;

export const API_LOG_ALL: number;

export const API_LOG_ALWAYS: number;

export const API_REQUEST_LEVEL: number;

export const API_RESPONSE_LEVEL: number;

export const API_RETURN_LEVEL: number;

export const CHARGE_DAILY: number;

export const CHARGE_RANGE: number;

export const CHARGE_STANDARD: number;

export const CHARGE_STORAGE: number;

export const FRUNK: string;

export const MAX_TEMP: number;

export const MIN_TEMP: number;

export const SUNROOF_CLOSED: string;

export const SUNROOF_VENT: string;

export const TRUNK: string;

export const portal: string;

export const streamingColumns: string[];

export const streamingPortal: string;

export function allVehicles(options: any, callback: any): any;

export function allVehiclesAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function calendar(options: any, entry: any, callback: any): void;

export function calendarAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function cancelSoftwareUpdate(options: any, callback: any): void;

export function cancelSoftwareUpdateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function chargeMaxRange(options: any, callback: any): void;

export function chargeMaxRangeAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function chargeStandard(options: any, callback: any): void;

export function chargeStandardAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function chargeState(options: any, callback: any): void;

export function chargeStateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function climateStart(options: any, callback: any): void;

export function climateStartAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function climateState(options: any, callback: any): void;

export function climateStateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function climateStop(options: any, callback: any): void;

export function climateStopAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function closeChargePort(options: any, callback: any): void;

export function closeChargePortAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function doorLock(options: any, callback: any): void;

export function doorLockAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function doorUnlock(options: any, callback: any): void;

export function doorUnlockAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function driveState(options: any, callback: any): void;

export function driveStateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function flashLights(options: any, callback: any): void;

export function flashLightsAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function getLogLevel(): any;

export function getModel(vehicle: any): any;

export function getPaintColor(vehicle: any): any;

export function getPortalBaseURI(): any;

export function getShortVin(vehicle: any): any;

export function getStreamingBaseURI(): any;

export function getVin(vehicle: any): any;

export function get_command(options: any, command: any, callback: any): any;

export function get_commandAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function guiSettings(options: any, callback: any): void;

export function guiSettingsAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function homelink(options: any, lat: any, long: any, token: any, callback: any): void;

export function homelinkAsync(a0: any, a1: any, a2: any, a3: any, ...args: any[]): any;

export function honkHorn(options: any, callback: any): void;

export function honkHornAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function login(username: any, password: any, callback: any): void;

export function loginAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function logout(authToken: any, callback: any): void;

export function logoutAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function makeCalendarEntry(eventName: any, location: any, startTime: any, endTime: any, accountName: any, phoneName: any): any;

export function mediaPlayNext(options: any, callback: any): void;

export function mediaPlayNextAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaPlayNextFavorite(options: any, callback: any): void;

export function mediaPlayNextFavoriteAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaPlayPrevious(options: any, callback: any): void;

export function mediaPlayPreviousAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaPlayPreviousFavorite(options: any, callback: any): void;

export function mediaPlayPreviousFavoriteAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaTogglePlayback(options: any, callback: any): void;

export function mediaTogglePlaybackAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaVolumeDown(options: any, callback: any): void;

export function mediaVolumeDownAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mediaVolumeUp(options: any, callback: any): void;

export function mediaVolumeUpAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function mobileEnabled(options: any, callback: any): void;

export function mobileEnabledAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function navigationRequest(options: any, subject: any, text: any, locale: any, callback: any): void;

export function navigationRequestAsync(a0: any, a1: any, a2: any, a3: any, ...args: any[]): any;

export function openChargePort(options: any, callback: any): void;

export function openChargePortAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function openTrunk(options: any, which: any, callback: any): void;

export function openTrunkAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function post_command(options: any, command: any, body: any, callback: any): any;

export function post_commandAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function refreshToken(refresh_token: any, callback: any): void;

export function refreshTokenAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function remoteStart(options: any, password: any, callback: any): void;

export function remoteStartAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function resetValetPin(options: any, callback: any): void;

export function resetValetPinAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function scheduleSoftwareUpdate(options: any, offset: any, callback: any): void;

export function scheduleSoftwareUpdateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function setChargeLimit(options: any, amt: any, callback: any): void;

export function setChargeLimitAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function setLogLevel(level: any): void;

export function setPortalBaseURI(uri: any): void;

export function setStreamingBaseURI(uri: any): void;

export function setTemps(options: any, driver: any, pass: any, callback: any): void;

export function setTempsAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function setValetMode(options: any, onoff: any, pin: any, callback: any): void;

export function setValetModeAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function startCharge(options: any, callback: any): void;

export function startChargeAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function startStreaming(options: any, callback: any, onDataCb: any): void;

export function stopCharge(options: any, callback: any): void;

export function stopChargeAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function sunRoofControl(options: any, state: any, callback: any): void;

export function sunRoofControlAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function sunRoofMove(options: any, percent: any, callback: any): void;

export function sunRoofMoveAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function vehicle(options: any, callback: any): any;

export function vehicleAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function vehicleConfig(options: any, callback: any): void;

export function vehicleConfigAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function vehicleData(options: any, callback: any): void;

export function vehicleDataAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function vehicleState(options: any, callback: any): void;

export function vehicleStateAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function vehicles(options: any, callback: any): any;

export function vehiclesAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export function wakeUp(options: any, callback: any): void;

export function wakeUpAsync(a0: any, a1: any, a2: any, ...args: any[]): any;

export namespace allVehicles {
    const prototype: {
    };

}

export namespace allVehiclesAsync {
    const prototype: {
    };

}

export namespace calendar {
    const prototype: {
    };

}

export namespace calendarAsync {
    const prototype: {
    };

}

export namespace cancelSoftwareUpdate {
    const prototype: {
    };

}

export namespace cancelSoftwareUpdateAsync {
    const prototype: {
    };

}

export namespace chargeMaxRange {
    const prototype: {
    };

}

export namespace chargeMaxRangeAsync {
    const prototype: {
    };

}

export namespace chargeStandard {
    const prototype: {
    };

}

export namespace chargeStandardAsync {
    const prototype: {
    };

}

export namespace chargeState {
    const prototype: {
    };

}

export namespace chargeStateAsync {
    const prototype: {
    };

}

export namespace climateStart {
    const prototype: {
    };

}

export namespace climateStartAsync {
    const prototype: {
    };

}

export namespace climateState {
    const prototype: {
    };

}

export namespace climateStateAsync {
    const prototype: {
    };

}

export namespace climateStop {
    const prototype: {
    };

}

export namespace climateStopAsync {
    const prototype: {
    };

}

export namespace closeChargePort {
    const prototype: {
    };

}

export namespace closeChargePortAsync {
    const prototype: {
    };

}

export namespace doorLock {
    const prototype: {
    };

}

export namespace doorLockAsync {
    const prototype: {
    };

}

export namespace doorUnlock {
    const prototype: {
    };

}

export namespace doorUnlockAsync {
    const prototype: {
    };

}

export namespace driveState {
    const prototype: {
    };

}

export namespace driveStateAsync {
    const prototype: {
    };

}

export namespace flashLights {
    const prototype: {
    };

}

export namespace flashLightsAsync {
    const prototype: {
    };

}

export namespace getLogLevel {
    const prototype: {
    };

}

export namespace getModel {
    const prototype: {
    };

}

export namespace getPaintColor {
    const prototype: {
    };

}

export namespace getPortalBaseURI {
    const prototype: {
    };

}

export namespace getShortVin {
    const prototype: {
    };

}

export namespace getStreamingBaseURI {
    const prototype: {
    };

}

export namespace getVin {
    const prototype: {
    };

}

export namespace get_command {
    const prototype: {
    };

}

export namespace get_commandAsync {
    const prototype: {
    };

}

export namespace guiSettings {
    const prototype: {
    };

}

export namespace guiSettingsAsync {
    const prototype: {
    };

}

export namespace homelink {
    const prototype: {
    };

}

export namespace homelinkAsync {
    const prototype: {
    };

}

export namespace honkHorn {
    const prototype: {
    };

}

export namespace honkHornAsync {
    const prototype: {
    };

}

export namespace login {
    const prototype: {
    };

}

export namespace loginAsync {
    const prototype: {
    };

}

export namespace logout {
    const prototype: {
    };

}

export namespace logoutAsync {
    const prototype: {
    };

}

export namespace makeCalendarEntry {
    const prototype: {
    };

}

export namespace mediaPlayNext {
    const prototype: {
    };

}

export namespace mediaPlayNextAsync {
    const prototype: {
    };

}

export namespace mediaPlayNextFavorite {
    const prototype: {
    };

}

export namespace mediaPlayNextFavoriteAsync {
    const prototype: {
    };

}

export namespace mediaPlayPrevious {
    const prototype: {
    };

}

export namespace mediaPlayPreviousAsync {
    const prototype: {
    };

}

export namespace mediaPlayPreviousFavorite {
    const prototype: {
    };

}

export namespace mediaPlayPreviousFavoriteAsync {
    const prototype: {
    };

}

export namespace mediaTogglePlayback {
    const prototype: {
    };

}

export namespace mediaTogglePlaybackAsync {
    const prototype: {
    };

}

export namespace mediaVolumeDown {
    const prototype: {
    };

}

export namespace mediaVolumeDownAsync {
    const prototype: {
    };

}

export namespace mediaVolumeUp {
    const prototype: {
    };

}

export namespace mediaVolumeUpAsync {
    const prototype: {
    };

}

export namespace mobileEnabled {
    const prototype: {
    };

}

export namespace mobileEnabledAsync {
    const prototype: {
    };

}

export namespace navigationRequest {
    const prototype: {
    };

}

export namespace navigationRequestAsync {
    const prototype: {
    };

}

export namespace openChargePort {
    const prototype: {
    };

}

export namespace openChargePortAsync {
    const prototype: {
    };

}

export namespace openTrunk {
    const prototype: {
    };

}

export namespace openTrunkAsync {
    const prototype: {
    };

}

export namespace post_command {
    const prototype: {
    };

}

export namespace post_commandAsync {
    const prototype: {
    };

}

export namespace refreshToken {
    const prototype: {
    };

}

export namespace refreshTokenAsync {
    const prototype: {
    };

}

export namespace remoteStart {
    const prototype: {
    };

}

export namespace remoteStartAsync {
    const prototype: {
    };

}

export namespace resetValetPin {
    const prototype: {
    };

}

export namespace resetValetPinAsync {
    const prototype: {
    };

}

export namespace scheduleSoftwareUpdate {
    const prototype: {
    };

}

export namespace scheduleSoftwareUpdateAsync {
    const prototype: {
    };

}

export namespace setChargeLimit {
    const prototype: {
    };

}

export namespace setChargeLimitAsync {
    const prototype: {
    };

}

export namespace setLogLevel {
    const prototype: {
    };

}

export namespace setPortalBaseURI {
    const prototype: {
    };

}

export namespace setStreamingBaseURI {
    const prototype: {
    };

}

export namespace setTemps {
    const prototype: {
    };

}

export namespace setTempsAsync {
    const prototype: {
    };

}

export namespace setValetMode {
    const prototype: {
    };

}

export namespace setValetModeAsync {
    const prototype: {
    };

}

export namespace startCharge {
    const prototype: {
    };

}

export namespace startChargeAsync {
    const prototype: {
    };

}

export namespace startStreaming {
    const prototype: {
    };

}

export namespace stopCharge {
    const prototype: {
    };

}

export namespace stopChargeAsync {
    const prototype: {
    };

}

export namespace sunRoofControl {
    const prototype: {
    };

}

export namespace sunRoofControlAsync {
    const prototype: {
    };

}

export namespace sunRoofMove {
    const prototype: {
    };

}

export namespace sunRoofMoveAsync {
    const prototype: {
    };

}

export namespace vehicle {
    const prototype: {
    };

}

export namespace vehicleAsync {
    const prototype: {
    };

}

export namespace vehicleConfig {
    const prototype: {
    };

}

export namespace vehicleConfigAsync {
    const prototype: {
    };

}

export namespace vehicleData {
    const prototype: {
    };

}

export namespace vehicleDataAsync {
    const prototype: {
    };

}

export namespace vehicleState {
    const prototype: {
    };

}

export namespace vehicleStateAsync {
    const prototype: {
    };

}

export namespace vehicles {
    const prototype: {
    };

}

export namespace vehiclesAsync {
    const prototype: {
    };

}

export namespace wakeUp {
    const prototype: {
    };

}

export namespace wakeUpAsync {
    const prototype: {
    };

}

