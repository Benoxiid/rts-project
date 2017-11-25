export module Construction{
	export class Block {

		player_id:number;
		data_needed:number;

		constructor(player_id:number,data_needed:number) {
			this.player_id=player_id;
			this.data_needed=data_needed;
		}

		public build(data_provided:number){

		}
	}

	export class Bus extends Block {

		constructor(player_id:number,data_needed:number) {
			super(player_id,data_needed);
		}
	}

	export class Building extends Block {

		energy_consuption:number;

		constructor(player_id:number,data_needed:number,energy_consuption:number){
			super(player_id,data_needed);
			this.energy_consuption=energy_consuption;
		}

		public consume():number{
			return this.data_needed;
		}
	}
}
