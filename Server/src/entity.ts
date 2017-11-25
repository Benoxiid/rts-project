export module Entity{
	export class Player{
		id:number;
		name:string;
		lvl:number;

		energy:number;
		data:number;

		constructor(id:number,name:string){
			this.id=id;
			this.name=name;
			this.lvl=1;
			this.energy=0;
			this.data=0;
		}

		get_energy():number{
			return this.energy;
		}

		get_data():number{
			return this.data;
		}

		set_energy(energy:number){
			this.energy=energy;
		}

		set_data(data:number){
			this.data=data;
		}
	}

	export class AI{
		id:number;
	}
}
