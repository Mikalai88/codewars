// Sum Numbers
function sum (numbers) {
    "use strict";
    if (numbers.length === 0) {return 0;}
    else {return numbers.reduce((total, currentValue) => total + currentValue);}

};