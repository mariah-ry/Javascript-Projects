/*Function containing dictionary of band member object*/
function myDictionary() {
    var Band_Member = {
        Name:"Billie Joe",
        Age:44,
        Specialty:"Vocals",
        Other:"Guitar",
        Another:"Piano"
    };
    delete Band_Member.Specialty; /*code to delete object*/
    document.getElementById("Dictionary").innerHTML = Band_Member.Specialty;
    /*this will output the code as undefined because the object was deleted*/
}

/*Function containing dictionary of band member 2 object*/
function myDictionary2() {
    var Band_Member2 = {
        Name:"Dave Grohl",
        Age:42,
        Specialty:"Vocals",
        Other:"Guitar",
        Another:"Bass"
    };
    document.getElementById("Dictionary2").innerHTML = Band_Member2.Specialty;
    /*this will output the code as "Vocals" because that is the value for the key noted*/
}