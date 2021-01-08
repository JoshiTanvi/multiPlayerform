class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('class35/playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/class35').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + playerCount;
    database.ref('class35/'+playerIndex).set({
      name:name
    });
  }
}
