const fs = require('fs');
const { clearInterval } = require('timers');

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

const checkFiles = function(filePaths){
    let noChangesCnt = 0;
    const fileVersions = new Array(filePaths.length).fill(null);
    const readFile = promisify(fs.readFile);

    const intervalId = setInterval(() => {
        const promises = filePaths.map(filePath => readFile(filePath, {encoding: 'utf8'}));
        Promise.all(promises)
        .then((filesData) => {
            let hasChanges = false;
            filesData.forEach((fileContent,i) => {
                if(fileVersions[i] && fileVersions[i] !== fileContent){
                    hasChanges = true;
                    console.log(`New change in file with number: ${i}`)
                }
                fileVersions[i] = fileContent;
            })
            noChangesCnt++;
            
            if(noChangesCnt === 12){
                console.log('Done');
                clearInterval(intervalId);
            }
        })

    },5000)
}

const filePaths = ['./test.txt', './test2.txt', './test3.txt'];
checkFiles(filePaths);