
function isEven(number){
    return number % 2 === 0 ? 1 : 0;
}

function divide(arr, fn){
   return arr.reduce(function(acc, curr){
        if(fn(curr) === 1){
            acc[0].push(curr);
        }else{
            acc[1].push(curr);
        }
        return acc;
    }, [[],[]])
}

var arr = [1,5,2,3,7,8];
var res = divide(arr, isEven);
console.log(res);