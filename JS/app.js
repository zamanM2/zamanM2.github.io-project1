let x = "rock";
let y = "paper";
let z = "sissors";
const input = " ";
const userInput = $(input[type = "text"]).val()

function logic (){
  if(x === y){
    console.log("papers wins")
  }
  else if (x === z){
    console.log("rock wins")
  }
  else if (y === z){
    console.log("sissors wins")
  }
}
