var A = 25; /* Global Variable */
var B = 12;

function myFunction1() {
    var C = 33; /* Local variable*/
    document.write("A + B + C = " + (A + B + C) + "<br>");
}

function myFunction2() {
    document.write("A + C = " + (A + C));
    console.log(A + C)
}

myFunction1();
myFunction2();

/* getDate, if statements*/
function get_Date() {
    if (new Date().getHours() < 23) {
        document.getElementById("getdate").innerHTML = "It's still early!"
    }
}

function timeAlert() {
    if (new Date().getHours() < 0) {
        document.getElementById("ifstatement").innerHTML = "It's still morning!"
    }
}

/* IF/ELSE statements */
function your_height() {
    height = document.getElementById("height").value;
    if (height <= 5) {
        average = "You are short.";
    }
    else {
        average = "You are tall.";
    }
    document.getElementById("your_height").innerHTML = average;
}

/* ELSE IF statement */
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}