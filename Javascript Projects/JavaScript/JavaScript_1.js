// Switch Statement //
function dog_Function() {
    var dog_output;
    var Dogs = document.getElementById("dog_input").value;
    var dog_text = " is a great breed of dog!"
    switch(Dogs) {
        case "Corgi":
            dog_output = "Corgi" + dog_text;
        break;
        case "Golden Retriever":
            dog_output = "Golden Retriever" + dog_text;
        break;
        case "Labrador":
            dog_output = "Labrador" + dog_text;
        break;
        case "Australian Shepard":
            dog_output = "Australian Shepard" + dog_text;
        break;
        case "Husky":
            dog_output = "Husky" + dog_text;
        break;
        default:
            dog_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = dog_output;
}

// getElementbyClassName() //
function header_Click() {
    document.getElementsByClassName("header").innerHTML = window.alert("Hello!");
}

// Canvas Graphic //
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 75, 60, 0, 5 * Math.PI);
ctx.stroke();

var c2 = document.getElementById("canvas2");
var ctx2 = c2.getContext("2d");
var grd = ctx2.createLinearGradient(0, 0, 150, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx2.fillStyle = grd;
ctx2.fillRect(10, 30, 150, 100)
