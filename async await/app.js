const fs = require('fs');
const promiseReadFile = require('./promiseReadfile'); //引用的是文件 promiseReadfile.js
const { log } = require('console');

//Here we use fs.readfile() and callback functions:
fs.readFile('./text1.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    let firstSentence = data;
    fs.readFile('./text2.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        let secondSentence = data;
        console.log(firstSentence, secondSentence);
        console.log('\n');
    })
        
});

readFiles(); // 异步函数，调用在这里

//Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promiseReadFile('./text1.txt', 'utf-8')
    .then(data => {
        firstSentence = data;
        return promiseReadFile('./text2.txt', 'utf-8');
    })
    .then(data => {
        let secondSentence = data;
        console.log(firstSentence, secondSentence);
    })
    .catch(err => {
        console.log(err);
    });

    //Here we use promiseReadFile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
    async function readFiles() {
        let firstSentence = await promiseReadFile('./text1.txt', 'utf-8');
        let secondSentence = await promiseReadFile('./text2.txt', 'utf-8');
        console.log(firstSentence, secondSentence, "This is the third sentence.");
    }

