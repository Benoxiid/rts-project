class Bus extends Block {
  
  constructor(struct_pt:number,player_id:number,data_needed:number) {
    super(struct_pt,player_id,data_needed);
  }

  shout(): string {
    return "Rooooaarrr!"
  }
}
