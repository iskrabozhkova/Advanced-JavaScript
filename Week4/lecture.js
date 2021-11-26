
// setTimeout(function(){
//     console.log('HELLO');
// }, 1000);
// (function () {
//     var userName = "Steve";
    
//     function display(name)
//     {
//         console.log("MyScript2.js: " + name);
//     }

//     display(userName);
//   })();
// var func = (function(a,b){
//     return a+b;
// })(10,20);

// //-console.log(func);

// for(var i = 0; i < 5; i++){
//      (function(curr){
//          setTimeout(function(){
//              console.log(curr);
//          },0)
//      }(i));
// }

 var fs = require('fs');

// fs.readFile('./test.txt', function(err, content){
//     if(err){return console.error(err)}
//     var modifiedContent = content + ' ' + content;

//     fs.writeFile('./test.txt', modifiedContent, function(err){
//         if(err){return console.error(err)}
//         console.log('Write file');
//     })
//     console.log('Read file');
// })
// console.log('End of file');

// function curry(fn){
//     return function curried(){
//         var args = [].slice.call(arguments);
//         if(arguments.length >= fn.length){
//             return fn.apply(undefined, arguments);
//         }else{
//             return function(){
//                 var args2 = [].slice.call(arguments);
//                 args2 = args.concat(args2);
//                 return curried.apply(undefined, args2);
               
//             }
//         }
//     }
// }

function readFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, function(err, content){
            if(err){return reject(err)}
            resolve(content);
        })
    })
}

// function writeFile(path, content){
//     return new Promise(function(resolve, reject){
//         fs.writeFile(path, content, function(err){
//             if(err){return reject(err);}
//             resolve(content)
//         })
//     })
// }
// var cWriteFile = curry(writeFile);
// readFile('./test.txt')
//     .then(function (content){ return content + '---' + content})
//     .then(cWriteFile('./test.txt'))

function change(path, cb){
    setInterval(function(){
        var lastContent = 0
        readFile(path).then(function(content){
            if(content.length > lastContent){
                lastContent = content.length;
                cb();
            }
        })
    }, 3000)
}

change('./test.txt', function(){
    console.log("File was changed");
})
