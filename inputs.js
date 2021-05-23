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
document.getElementById('para2').innerHTML = (`Here will be some stuff including ${nouns[1]}, ${adjectives[1]}, and ${verbs[1]}`);
alert("It's gettin' good!");
}

// PART THREE
function partThree() {
nouns[2] = prompt("Please enter a thing \(ex. animal, object, establishment...)")
adjectives[2] = prompt("Please choose a color.");
verbs[2] = prompt("Third action!");
document.getElementById('para3').innerHTML = (`Here will be some stuff including ${nouns[2]}, ${adjectives[2]}, and ${verbs[2]}`);
alert("The End!");
}
