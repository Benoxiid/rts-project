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

		public get_energy():number{
			return this.energy;
		}

		public get_data():number{
			return this.data;
		}

		public set_energy(energy:number){
			this.energy=energy;
		}

		public set_data(data:number){
			this.data=data;
		}
	}

	export class AI{
		id:number;
		army:Array<Minion>;

		constructor(){
			this.id=0;
		}

		create_minions(nb:number){
			for (var i = 0; i < nb; i++) {
    			this.army.push(new Minion(100));
			}
		}
	}

	export class Minion{
		hp:number;

		constructor(hp:number){
			this.hp=hp;
		}
	}
}
