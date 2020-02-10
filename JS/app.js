$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});

class player1{
constructor(){

 this.hp = 20;
this.input = " ";
//this.userInput = $(input[type = "button"]).val();


  }

}

class playerTwo{
constructor(){

this.hp= 20;
this.input = " ";
// const userInput = $(input[type = "button"]).val();
  }

}


 $( "#element1" ).click(function() {
   console.log( "element1" );

   let hpToTakeAway = "";
   let attackDamage = "";

  });

  $( "#element2" ).click(function() {
   console.log( "element2" );

   let hpToTakeAway = "";
   let attackDamage = "";

  });

   $( "#element3" ).click(function() {
   console.log( "element3" );

   let hpToTakeAway = "";
   let attackDamage = "";

  });

    $( "#element4" ).click(function() {
   console.log( "element4" );

   let hpToTakeAway = "";
   let attackDamage = "";

  });

   $( "#element5" ).click(function() {
   console.log( "element5" );

   let hpToTakeAway = "";
   let attackDamage = "";

  });

   let newPlayer1 = new player1();
   let newPlayerTwo = new playerTwo();



// class playerTwo{
// constructor(){

// this.hp= 20;
// this.input = " ";
// // const userInput = $(input[type = "button"]).val();
//   }

// }

function stagegen(){
  let generate= Math.floor(Math.random() * 6) + 0;
  let stages = ["url('https://vignette.wikia.nocookie.net/ssb/images/2/23/BoxingRingPunchOut.jpg/revision/latest?cb=20140409192407')",
                 "url('https://www.ssbwiki.com/images/thumb/8/86/SSBU-Battlefield.png/1200px-SSBU-Battlefield.png')",
                 "url('https://www.ssbwiki.com/images/thumb/4/43/SSBU-Mementos.jpg/1200px-SSBU-Mementos.jpg')",
                 "url('https://www.ssbwiki.com/images/thumb/8/82/SSBU-3D_Land.png/1200px-SSBU-3D_Land.png')",
                 "url('https://vignette.wikia.nocookie.net/ssb/images/d/d7/SSBWU_Kongo_Jungle_64.jpg/revision/latest?cb=20151113183454')",
                 "url('https://mariopartylegacy.com/wp-content/uploads/2018/07/stage11.jpg')"];
  document.getElementById("generate").style.backgroundImage=stages[generate];
}








// function logic (){
//   if(x === y){
//     console.log("papers wins")
//   }
//   else if (x === z){
//     console.log("rock wins")
//   }
//   else if (y === z){
//     console.log("sissors wins")
//   }
// }



