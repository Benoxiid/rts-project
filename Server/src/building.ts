class Building extends Block {
  
	energy_consuption:number;

  	constructor(struct_pt:number,player_id:number,data_needed:number,energy_consuption:number){
    	super(struct_pt,player_id,data_needed);
		this.energy_consuption=energy_consuption;
  	}
  

  shout(): string {
    return "Rooooaarrr!"
  }
}
