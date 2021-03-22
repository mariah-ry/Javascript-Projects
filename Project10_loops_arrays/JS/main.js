// While Loop //
function callLoop() {
    var number = "";
    var A = 1;
    while (A < 6) {
        number += "<br>" + A;
        A++
    }
    document.getElementById("loop").innerHTML = number;
}

// String length - Let //
function strLength() {
    let str = "What is the length of this string?"
    document.getElementById("length").innerHTML = str.length
}

// For Loop //
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
        content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// Array //
function arrayFunction () {
    var fruit = [];
    fruit[0] = "Apple";
    fruit[1] = "Lemon";
    fruit[2] = "Watermelon";
    fruit[3] = "Lychee";
    document.getElementById("array").innerHTML = "My favorite fruit is " + fruit[3] + ".";
}

// Constant // 
const Product = {type:"Slippers", price:"$30", color:"Coral" };
function constant_Function() {
    Product.type = "Rug";
    Product.size = "Large";
    document.getElementById("constant").innerHTML = "The " + Product.type + " is " + Product.size + ".";
}

// Return //
function returnFunction(name) {
    return "Hello " + name;
}
document.getElementById("returndemo").innerHTML = returnFunction("Martha");

// Object Assignment //
let Max = {
    species: "dog ",
    breed: "German Shepard ",
    demeanor: "friendly ",
    gender: "male ",
    description: function() {
        return "Max is a " + this.demeanor + this.gender + this.breed + this.species;
    }
};
document.getElementById("pet_object").innerHTML = Max.description();

// Break/Continue //
var i;
var text = ""
for (i = 0; i < 10; i++) {
    if (i === 2) { continue; }
    text += "The number is " + i + "<br>";
    if (i === 5) { break; }
    let text2 = "The loop finished at " + i + ".";
}

document.getElementById("breakcontinue").innerHTML = text;