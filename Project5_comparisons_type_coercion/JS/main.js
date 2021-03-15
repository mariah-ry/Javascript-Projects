document.write(typeof 3) /*Uses "type of"*/
document.write(" 10" + 7) /*Coercion*/

function myNaN() {
    document.getElementById("NaNtest").innerHTML = 0/0;
} /*uses equation to display NaN*/

function nanTrue() {
    document.getElementById("test2").innerHTML = isNaN("Is this a number?");
} /* isNaN TRUE */

function nanFalse() {
    document.getElementById("test3").innerHTML = isNaN(9);
} /* isNaN FALSE */

function posInfinity() {
    document.getElementById("positive").innerHTML = 7E310;
} /* Infinity */

function negInfinity() {
    document.getElementById("negative").innerHTML = -9E410;
} /* -Infinity */

function blTrue() {
    document.getElementById("true").innerHTML = (6 < 7);
} /* Boolean TRUE */

function blFalse() {
    document.getElementById("false").innerHTML = (6 > 7);
} /* Boolean FALSE */

/*Console Logs*/
console.log (9 + 9);
console.log (3 > 9);

/* comparison */
function compTrue() {
    document.getElementById("comparetrue").innerHTML = (45 == 40 + 5);
}

function compFalse() {
    document.getElementById("comparefalse").innerHTML = (36 == 36 + 12);    
}

function compSametypevalue() {
    document.getElementById("sametypevalue").innerHTML = (10 === 10);
}

function compDifftypevalue() {
    document.getElementById("difftypevalue").innerHTML = (10 === "Cats");
}

function compDifftypesamevalue() {
    document.getElementById("difftype").innerHTML = ("eleven" === 11);
}

function compDiffvaluesametype() {
    document.getElementById("diffvalue").innerHTML = (34 === 3);
}

/* Boolean operators */
function andTrue() {
    document.getElementById("andtrue").innerHTML = (8==8 && 11 > 1);
}

function andFalse() {
    document.getElementById("andfalse").innerHTML = (8==9 && 11 > 1);
}

function orTrue() {
    document.getElementById("ortrue").innerHTML = (1 > 3 || 7 > 2);
}

function orFalse() {
    document.getElementById("orfalse").innerHTML = (1 > 6 || 7 > 12);
}

function notTrue() {
    document.getElementById("nottrue").innerHTML = !(1 > 4);
}

function notFalse() {
    document.getElementById("notfalse").innerHTML = !(1 < 3);
}