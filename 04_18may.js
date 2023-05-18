// programmers question URL : https://school.programmers.co.kr/learn/courses/30/lessons/181951
// 문제 : a와 b 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`); // wrote here!
});



// chat GPT said this is more clean code :

// const a = Number(input[0]);
// const b = Number(input[1]);
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);