// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function decToBin(dec){
    return dec.toString(2);
}

function countZeros(binstring){
    var longest = 0;
    var current = 0;
    for (var i=0;i<binstring.length;i++){
        if (binstring[i] == '0'){
            current++;
        } else {
            if (current>longest) {
                longest=current;
            }
            current=0;
        }
    }
    if ((binstring[binstring.length]=='1')&&(current>longest)) {
        longest=current;
    }
    return longest;
}

function solution(N) {
    var binstring = decToBin(N);
    return countZeros(binstring);
    // write your code in JavaScript (Node.js 4.0.0)
}


console.log(solution(20));