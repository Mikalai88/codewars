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