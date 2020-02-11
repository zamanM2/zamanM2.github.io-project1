const ELEMENT_1_ATTACK = 8;
const ELEMENT_1_HP = 1;

const ELEMENT_2_ATTACK = 5;
const ELEMENT_2_HP = 1;

const ELEMENT_3_ATTACK = 4;
const ELEMENT_3_HP = 2;

const ELEMENT_4_ATTACK = 3;
const ELEMENT_4_HP = 3;

const ELEMENT_5_HP = 5;

// Hide all the characters from appearing untill one is selected by player
document.getElementById("sub").style.display = "none";
document.getElementById("scorpion").style.display = "none";
document.getElementById("raiden").style.display = " display";
document.getElementById("shao").style.display = "none";



$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});

class player1{
constructor(){

this.hp = 50;
this.input = " ";
//this.userInput = $(input[type = "button"]).val();


  }

}

class playerTwo{
constructor(){

this.hp= 50;
this.input = " ";
// const userInput = $(input[type = "button"]).val();
  }

}

   let newPlayer1 = new player1();
   let newPlayerTwo = new playerTwo();



  //Player 1 Buttons
 $( "#element1" ).click(function() {
   console.log( "element1" );

   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_1_ATTACK;
   newPlayer1.hp = newPlayer1.hp - ELEMENT_1_HP;

   newPlayer1.attk = newPlayerTwo.hp -ELEMENT_1_ATTACK;

   console.log(" Player2 was attacked ! Hp is " + newPlayerTwo.hp);
   console.log("Attk did " + newPlayer1.attk + " Damage");
   console.log("Current player1 hp is " + newPlayer1.hp );

  });

  $( "#element2" ).click(function() {
   console.log( "element2" );

     newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_2_ATTACK;
   newPlayer1.hp = newPlayer1.hp - ELEMENT_2_HP;

   newPlayer1.attk = newPlayerTwo.hp -ELEMENT_2_ATTACK;

   console.log(" Player2 was attacked ! Hp is " + newPlayerTwo.hp);
   console.log("Attk did " + newPlayer1.attk + " Damage");
   console.log("Current player1 hp is " + newPlayer1.hp );

  });

   $( "#element3" ).click(function() {
   console.log( "element3" );

    newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_3_ATTACK;
   newPlayer1.hp = newPlayer1.hp - ELEMENT_3_HP;

   newPlayer1.attk = newPlayerTwo.hp -ELEMENT_3_ATTACK;

   console.log(" Player2 was attacked ! Hp is " + newPlayerTwo.hp);
   console.log("Attk did " + newPlayer1.attk + " Damage");
   console.log("Current player1 hp is " + newPlayer1.hp );

  });

    $( "#element4" ).click(function() {
   console.log( "element4" );

   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_4_ATTACK;
   newPlayer1.hp = newPlayer1.hp - ELEMENT_4_HP;

   newPlayer1.attk = newPlayerTwo.hp -ELEMENT_4_ATTACK;

   console.log(" Player2 was attacked ! Hp is " + newPlayerTwo.hp);
   console.log("Attk did " + newPlayer1.attk + " Damage");
   console.log("Current player1 hp is " + newPlayer1.hp );

  });

   $( "#element5" ).click(function() {
   console.log( "element5" );

  newPlayer1.hp = newPlayer1.hp + ELEMENT_5_HP;
  console.log("Hp is " +newPlayer1.hp);

  });


   //Player 2 buttons
   $( "#element6" ).click(function() {
   console.log( "element6" );

   newPlayer1.hp = newPlayer1.hp - ELEMENT_6_ATTACK;
   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_6_HP;

   newPlayerTwo.attk = newPlayer1.hp -ELEMENT_6_ATTACK;

   console.log(" Player1 was attacked ! Hp is " + newPlayer1.hp);
   console.log("Attk did " + newPlayerTwo.attk + " Damage");
   console.log("Current player2 hp is " + newPlayerTwo.hp );


  });

  $( "#element7" ).click(function() {
   console.log( "element7" );
   newPlayer1.hp = newPlayer1.hp - ELEMENT_7_ATTACK;
   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_7_HP;

   newPlayerTwo.attk = newPlayer1.hp -ELEMENT_7_ATTACK;

   console.log(" Player1 was attacked ! Hp is " + newPlayer1.hp);
   console.log("Attk did " + newPlayerTwo.attk + " Damage");
   console.log("Current player2 hp is " + newPlayerTwo.hp );

  });

   $( "#element8" ).click(function() {
   console.log( "element8" );

   newPlayer1.hp = newPlayer1.hp - ELEMENT_8_ATTACK;
   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_8_HP;

   newPlayerTwo.attk = newPlayer1.hp -ELEMENT_8_ATTACK;

   console.log(" Player1 was attacked ! Hp is " + newPlayer1.hp);
   console.log("Attk did " + newPlayerTwo.attk + " Damage");
   console.log("Current player2 hp is " + newPlayerTwo.hp );

  });

    $( "#element9" ).click(function() {
   console.log( "element9" );

   newPlayer1.hp = newPlayer1.hp - ELEMENT_9_ATTACK;
   newPlayerTwo.hp = newPlayerTwo.hp - ELEMENT_9_HP;

   newPlayerTwo.attk = newPlayer1.hp -ELEMENT_9_ATTACK;

   console.log(" Player1 was attacked ! Hp is " + newPlayer1.hp);
   console.log("Attk did " + newPlayerTwo.attk + " Damage");
   console.log("Current player2 hp is " + newPlayerTwo.hp );


  });

   $( "#element10" ).click(function() {
   console.log( "element10" );

  newPlayerTwo.hp = newPlayerTwo.hp + ELEMENT_5_HP;
  console.log("Current player2 hp is " +newPlayerTwo.hp);

  });

//Ask User  Twice for Names
     player1 = prompt("Please enter your name", " ");

    if (player1!= null) {

    document.getElementById("player1").innerHTML =

     player1 ;
}

   //   player1 = prompt("Choose your avatar");

   //  if (player1!= null) {
   //  $( "#element8" ).click(function() {
   // console.log( "element8" );
   //  //document.getElementById("sub"||"shao"||"raiden"||"scorpion").innerHTML =

   //   document.getElementById("scorpion").style.display;
   //  }
//}



     playerTwo = prompt("Please enter your name", " ");

    if (playerTwo!= null) {

    document.getElementById("playerTwo").innerHTML =

     playerTwo ;

}

//Stage generate function
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



