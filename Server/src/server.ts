import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

//export module Com{
	export class Server{
		private app:express.Application;

		constructor() {
    		//create expressjs application
    		this.app = express();

    		//configure application
    		//this.config();
  		}

		public use(){
			this.app.use(express.static('../Client/dist'));
		}

		public listen(time:number){
			this.app.listen(time);
		}
	}

	export class Client_db{

	}
//}
