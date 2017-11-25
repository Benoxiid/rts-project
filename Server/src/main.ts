import * as express from "express";
var app =  express();

app.use(express.static('../Client/dist'));

app.listen(3000);
