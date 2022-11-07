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



function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(x => !geese.includes(x))
    // return an array containing all of the strings in the input array except those that match strings in geese
}

function well(x){
    let count = 0;
    for (const idea of x) {
        if (idea === 'good') count += 1
    }
    if (count > 2) return 'I smell a series!';
    if ( count > 0) return 'Publish!';
    return 'Fail!';
}