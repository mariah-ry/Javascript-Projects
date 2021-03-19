/* concatenated sentence */
function concatenated_Sentence() {
    var a = "I am ";
    var b = "very hungry.";
    var whole_sentence = a.concat(b);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

/*Slice Method*/
function slice_Method() {
    var sentenceA = "Curiosity killed the cat, but satisfaction brought it back.";
    var section = sentenceA.slice(0, 9);
    document.getElementById("slice").innerHTML = section;
}

/* Uppercase and Search Methods */
var original_string = "Let's get some coffee!";
document.write(original_string.toUpperCase());

function search_Function() {
    var str = "Starbucks has coffee.";
    var s = str.search("Starbucks");
    document.getElementById("searchcoffee").innerHTML = s;
}

/* To string method */
function stringfunction() {
    var num1 = 33;
    document.getElementById("string").innerHTML = num1.toString();
}

/* To precision method */
function precision1() {
    var x = 129.006789;
    document.getElementById("precision").innerHTML = x.toPrecision(6);
}

/* toFixed() and valueOf() methods */
function fixedDecimal() {
    var num3 = 453.000932
    var res = num3.toFixed(3)
    document.getElementById("fixed").innerHTML = res
}

function stringVal() {
    var string1 = "Today is March 17th."
    document.getElementById("fixed").innerHTML = string1.valueOf();
}