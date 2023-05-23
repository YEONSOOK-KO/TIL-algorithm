// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181946
// 문바열 붙여서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2)
});



// another answer that is good. :

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// }).on('line', function (line) {
//     const strArr = line.split(' ')
//     console.log(strArr.join(''))
// })

