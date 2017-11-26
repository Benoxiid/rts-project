"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer() {
        this.tick_s = setInterval("clock_s()", 1000);
        this.tick_w = setInterval("clock_w()", 604800000);
    }
    Timer.prototype.clock_s = function () {
    };
    Timer.prototype.clock_w = function () {
    };
    return Timer;
}());
exports.Timer = Timer;
