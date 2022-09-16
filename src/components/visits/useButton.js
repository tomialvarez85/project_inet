let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

//submit button
let submit = document.getElementById("submit")

// number field
let textfield = document.getElementById("texfield")


zero.onclick = function(e){
    textfield.value += "0";
}

one.onclick = function(e){
    textfield.value += "1";
}

two.onclick = function(e){
    textfield.value += "2";
}

three.onclick = function(e){
    textfield.value += "3";
}

four.onclick = function(e){
    textfield.value += "4";
}

five.onclick = function(e){
    textfield.value += "5";
}


six.onclick = function(e){
    textfield.value += "6";
}


seven.onclick = function(e){
    textfield.value += "7";
}


eight.onclick = function(e){
    textfield.value += "8";
}


nine.onclick = function(e){
    textfield.value += "9";
}

nine.onclick = function(e){
    textfield.value += "9";
}

function saveDni(){
    const dni = textfield.value()
    return dni
}