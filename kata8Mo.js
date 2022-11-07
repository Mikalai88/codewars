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