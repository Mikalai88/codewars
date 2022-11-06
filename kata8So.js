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