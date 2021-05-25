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
  let chose = document.querySelector('#chosen');
  morning = `url("images/AMcoffee.jpg")`;
  monkeySko = `url("images/vestMonkey.png")`;

  // serious
  if (chooser == "serious") {
    console.log(`The ${chooser} begins.`)
    chose.innerHTML = (`Another Monday, another pot of coffee...`);
    pix.style.backgroundImage = morning;
  }
  // silly
  else if (chooser == "silly") {
    console.log(`You have chosen ${chooser}.`)
    chose.innerHTML = (`A monkey beckons you around a corner, smoking a cigarette and wearing a vest.`);
    pix.style.backgroundImage = monkeySko;

  }
}

alert("For this quest, we are going to need some input from you!");
