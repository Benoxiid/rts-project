export module Mapping{
	export class Cell{
		private id_block:number;
		private bus_connection:boolean[];

		public constructor(){
			this.id_block=0;
			this.bus_connection=[false,false,false,false];
		}
	}

	export class Map{
		private cell:Cell[][];

		constructor(h:number,l:number){
			this.cell=[];

			for(var i: number = 0; i<h; i++){
				this.cell[i] = [];
				for(var j: number = 0; i<l; j++){
					this.cell[i][j] = new Cell();
				}
			}
		}

		
	}
}
