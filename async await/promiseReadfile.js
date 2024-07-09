const fs = require('fs');
// 这行代码是用于在Node.js环境中引入Node.js核心模块之一的'fs'模块。它提供了一组API来处理文件操作系统操作。使你可以在JS代码中使用'fs'模块提供的各种功能，比如读取文件，写入文件，删除文件等。

// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary.
//我们在下面创建了一个读取文件并返回 Promise 的函数。我们将使用回调的 fs.readfile() 函数转换为 Promise 形式。许多异步函数已经返回了 promises，因此这个额外的步骤很少是必要的。

const promiseReadFile = (file, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, (err, text) => {
            if(err){
                return reject(err.message);
            }
            resolve(text);
        })
    })
}

module.exports = promiseReadFile;
// 没有return new Promise的时候会导致Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'then')
//没有正确的返回promiseReadFile函数定义的promise.它只是创建了一个new promise但是上面也没做，所以在链式调用的时候，无法调用.then()