function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
        result +=array[i];
    }
    return result/array.length;
}

function fakeBin(x){
    return ("" + x).replace(/[0-4]/g,'0').replace(/[5-9]/g,'1');
}

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}