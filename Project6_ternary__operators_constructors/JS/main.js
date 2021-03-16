function ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}

function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "Invalid age.":"You are now registered to vote.";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

var Cassandra = new Vehicle("Subaru", "Crosstrek", 2015, "Orange");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Cassandra drives an " + Cassandra.Vehicle_Color + ", " + Cassandra.Vehicle_Year + " " + Cassandra.Vehicle_Make + " " + Cassandra.Vehicle_Model + ".";
}

function Dog(Breed, Color, Age) {
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}

function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Math();
    function Math() {
        var a = 1
        var b = 7
        window.alert("1 + 7 = " + (a + b));
    }
}