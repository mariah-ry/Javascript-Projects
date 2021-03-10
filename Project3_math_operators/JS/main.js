/*ARITHMETIC OPERATORS*/
function addFunction() {
    var addition = 7 + 4;
    document.getElementById("Math").innerHTML = "7 + 4 = " + addition;
}

function subFunction() {
    var subtraction = 4 - 3;
    document.getElementById("Math2").innerHTML = "4 - 3 = " + subtraction;
}

function multFunction() {
    var multiply = 6*5;
    document.getElementById("Math3").innerHTML = "6 * 5 = " + multiply;
}

function divFunction() {
    var divide = 24 / 2;
    document.getElementById("Math4").innerHTML = "24/2 = " + divide;
}

/*USING MULTIPLE OPERATORS*/
function multiopFunction() {
    var multiops = 1 + 1 * 3 / 2;
    document.getElementById("Math5").innerHTML = "1 + 1, multiplied by 3, divded by 2 = " + multiops
}

function modulusFunction() {
    var modulus = 7 % 2;
    document.getElementById("Modulus").innerHTML = "When you divide 7 by 2 you get a remainder of " + modulus;
}

function negateFunction() {
    var a = 35;
    document.getElementById("Negation").innerHTML = -a;
}

/*USING THE INCREMENT/DECREMENT OPERATORS*/
var b = 35, c = 12;
b++;
c--;
document.write("Here is an increment operator for 35: (" + b + ") and a decrement operator for 12: (" + c + ")");

function randomMath() {
    var random = window.alert(Math.random() * 10);
} 

/*MATH OBJECT AND METHOD*/
function roundFunct() {
    var round = Math.round(13.3);
    document.getElementById("mathmethod").innerHTML = round;
}