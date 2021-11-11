

const promisify = (func) => {
    return function (...args) {
       // var args = Array.prototype.slice.call(arguments);
        return new Promise(function (resolve, reject){
             const handler = (err,data) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(data);
            }
            //const arr = args.push([handler])
            func(...args, handler)
            //func.apply(undefined, arr)
        })
    }
}

const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

readFile('./data.txt')
  .then(content => content + ' more data')
  .then(data => writeFile('./data.txt', data))
  .then(() => console.log('Operation completed!'));

