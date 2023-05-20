const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];
    
    let letters = str.split(""); // letters[0] = s, letters[1] = t, letters[2] = r
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (letters[i] === letters[i].toUpperCase() && letters[i] !== letters[i].toLowerCase()) {
            letters[i] = letters[i].toLowerCase();
        } else {
            letters[i] = letters[i].toUpperCase();
        }
        result.push(letters[i]);
    }
    console.log(result.join(""));
});