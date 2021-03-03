function displayBlue() {
    var str = "Here is some blue text!";
    var result = str.fontcolor("blue");
    document.getElementById('demo').innerHTML = result;
    //This function is connected to a button in HTML which changes the paragraph text and turns it blue.//
}

function function2() {
    var sentence = "This is a";
    sentence += " concatenated sentence";
    document.getElementById('concatenate').innerHTML = sentence;
    //This function displays a concatenated string//
}
