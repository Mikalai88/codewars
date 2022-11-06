// Sum Numbers
function sum (numbers) {
    "use strict";
    if (numbers.length === 0) {return 0;}
    else {return numbers.reduce((total, currentValue) => total + currentValue);}

};

function bmi(weight, height) {
    var bmi = weight / (height*height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <= 30) {
        return "Overweight";
    } else if (bmi > 30) {
        return "Obese";
    }
}

function grow(x){
    return x.reduce((total, num) => {
        return total * num;
    }, 1);
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

function simpleMultiplication(number) {
    var multi  = number % 2 == 0 ? 8 : 9;
    return number * multi;
}
