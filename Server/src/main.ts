import * as express from "express";

var app = express();

app.use(express.static('../Client/dist'));

//var clk=new Timer();

app.listen(3000);
