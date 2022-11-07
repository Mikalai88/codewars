function twoSort(s) {
    return s
        .sort((a, b) => a < b ? -1 : 1)[0]
        .split("")
        .join("***");

}

function isPalindrome(x) {
    // your code here
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
}

function finalGrade (exam, projects) {
    return exam > 90 || projects > 10 ? 100
        : exam > 75 && projects > 4 ? 90
            : exam > 50 && projects > 1 ? 75
                : 0
}

function sumStr(a,b) {
    return String(+a + +b)
}

function findDifference(a, b) {
    //loading...
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}


function testEven(n) {
    return n%2===0;
}