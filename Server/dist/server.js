"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//export module Server{
var Serv_com = /** @class */ (function () {
    function Serv_com() {
        //create expressjs application
        this.app = express();
        //configure application
        //this.config();
    }
    /*
            public static bootstrap(): Serv_com {
                return new Serv_com();
            }
    */
    Serv_com.prototype.use = function () {
        this.app.use(express.static('../Client/dist'));
    };
    Serv_com.prototype.listen = function (time) {
        this.app.listen(time);
    };
    return Serv_com;
}());
exports.Serv_com = Serv_com;
var Serv_db = /** @class */ (function () {
    function Serv_db() {
    }
    return Serv_db;
}());
exports.Serv_db = Serv_db;
//}
