import {Construction} from "./construction";

export class Timer{
	tick_s:number;
	tick_w:number;

	constructor(){
		this.tick_s=setInterval("clock_s()",1000);
		this.tick_w=setInterval("clock_w()",604800000);
	}

	public clock_s(){
   		
 	}

	public clock_w(){
   		
 	}
 
}
