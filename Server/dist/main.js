"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from "express";
var server_1 = require("./server");
var client_serv = new server_1.Serv_com();
client_serv.use();
client_serv.listen(3000);
