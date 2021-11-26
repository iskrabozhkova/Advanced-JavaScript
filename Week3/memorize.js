var sum = function (x, y) {
     return x + y;
}

function memorize(fn){
    var obj = {};
    return function(){
        var key = ' ';
        for(var prop in arguments){
            key += arguments[prop];
        }
        if(obj[key] === undefined){
            var sumResult = fn.apply(undefined, arguments);
            obj[key] = sumResult;
            return sumResult;
        }
        return obj[key];
    }
}


var memSum = memorize(sum);
console.log(memSum(2,3)); // пресмята, връща 5
console.log(memSum(3,3)); // пресмята, връща 6
console.log(memSum(2,3)); // директно връща 5 без да смята