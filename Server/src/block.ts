class Block {

	struct_pt:number;
	player_id:number;
	data_needed:number;
	tick:number;

  	constructor(struct_pt:number,player_id:number,data_needed:number) {
    	this.struct_pt=struct_pt;
		this.player_id=player_id;
		this.data_needed=data_needed;
  	}

  	build(data_provided:number){
    	
  	}
}
