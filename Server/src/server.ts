import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

export module Server{
	export class Serv_com{
		private app:express.Application;

		constructor() {
    		//create expressjs application
    		this.app = express();

    		//configure application
    		//this.config();
  		}

		public static bootstrap(): Serv_com {
    		return new Serv_com();
  		}

		public use(){
			this.app.use(express.static('../Client/dist'));
		}

		public listen(time:number){
			this.app.listen(time);
		}
	}

	export class Serv_db{

	}
}
