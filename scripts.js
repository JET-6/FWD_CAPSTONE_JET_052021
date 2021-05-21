// scripts for capstone
var questName = prompt("What is your quest name?", "May it be glorious.");
console.log("Hello " +questName+ ".");
document.getElementById('helloName').innerHTML = (`Welcome to your tale, ${questName}.`)

var serious;
var silly;
var chooser = prompt("What will today be?", "Silly or serious?").toLowerCase();
unChoice();
choice();

function unChoice() {
  while (chooser != "serious" &&
          chooser != "silly") {
          chooser = prompt("Please select one of the two options.", "serious or silly?").toLowerCase();
          }
}



function choice() {
  // var for docqueryselector
  let pix = document.querySelector('#img');

  // serious
  if (chooser == "serious") {
    console.log(`The ${chooser} begins.`)
    pix.innerHTML = (`Another Monday, another pot of coffee...`);
    pix.style.backgroundImage = `url("images/AMcoffee.jpg")`
  }
  // silly
  else if (chooser == "silly") {
    console.log(`You have chosen ${chooser}.`)
    pix.innerHTML = (`A monkey beckons you around a corner, smoking a cigarette and wearing a vest.`);
    pix.style.backgroundImage = `url("images/vestMonkey.png")`;

  }
}

alert("For this quest, we are going to need some input from you!");
