// scripts for moving text input into storyline
var nouns = [];
var adjectives = [];
var verbs = [];
var adverbs = [];

// creating prompts in order relevant to story
// PART ONE
function partOne() {
nouns[0] = prompt("Please enter a persons name.");
adjectives[0] = prompt("Please describe a person.");
verbs[0] = prompt("First action!");

document.getElementById('para1').innerHTML = (`It has been a long night. ${nouns[0]} has taken us through the ringer, again. Not unlike any other Tuesday night, but this time his ${adjectives[0]} antics have taken us too far. It is time to ${verbs[0]} and get the hell out of here.`);
alert("Excellent!");
}
// PART TWO
function partTwo() {
nouns[1] = prompt("Please enter a place name. Can be made up!");
adjectives[1] = prompt("Please describe the place.");
verbs[1] = prompt("Second action!");
document.getElementById('para2').innerHTML = (`You ask ${nouns[0]} "Where are we?" and they reply ${nouns[1]}. With no idea how we ended up in this ${adjectives[1]} room you ${verbs[1]}.`);
alert("It's gettin' good!");
}
// PART THREE
function partThree() {
nouns[2] = prompt("Please enter a thing \(ex. animal, object, establishment...)")
adjectives[2] = prompt("Please choose a color.");
verbs[2] = prompt("Third action!");
document.getElementById('para3').innerHTML = (`${verbs[1]} has led us to ${nouns[2]}, and it looks as though it can be of some help. There is a hue of ${adjectives[2]} in the distance. It seems as though we are free of this place. All your ${verbs[2]} has saved us!`);
alert("The End!");
}

// a bit of work on changing images
function changeImg1() {
  let image = document.querySelector('#img');
  roughNight1 = `url("images/night.jpg")`;
  document.body.style.backgroundImage = roughNight1;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'top';
}
function changeImg2() {
  let image = document.querySelector('#img');
  roughNight2 = `url("images/dungeon.jpg")`;
  document.body.style.backgroundImage = roughNight2;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'top';
}
function changeImg3() {
  let image = document.querySelector('#img');
  roughNight3 = `url("images/freedom.jpg")`;
  document.body.style.backgroundImage = roughNight3;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'top';
}
// timeout functions creating option to cancel story for the heck of it
function weGo1() {
  setTimeout(partOne, 1000);
}
function weGo2() {
  setTimeout(partTwo, 1000);
}
function weGo3() {
  setTimeout(partThree, 1000);
}
// create more space for the story > remove two sections
function hideaway() {
  document.querySelector('.title').style.display='none';
  document.querySelector('#img').style.display='none';
}
// these are integral, combinations to make the story go
function function1() {
  weGo1();
  changeImg1();
  hideaway();
}
function function2() {
  weGo2();
  changeImg2();
}
function function3(){
  weGo3();
  changeImg3();
}
