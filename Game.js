class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(150,500);
    car2 = createSprite(350,500);
    car3 = createSprite(550,500);
    car4 = createSprite(750,500);

    car1.addImage(trex);
    car2.addImage(trex);
    car3.addImage(trex);
    car4.addImage(trex);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
   
     // image(trackj,0,-displayHeight*4,displayWidth,displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

         

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
         
        }
        
      }

    }

    
     
    

    drawSprites();

    
  }
   
}
