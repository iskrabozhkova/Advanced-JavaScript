
function compose(){
    var funs = Array.prototype.slice.call(arguments).reverse();
    return function helper(){
        var args = Array.prototype.slice.call(arguments);
        funs.reduce(function(acc, curr){
            return curr.apply(undefined, acc instanceof Array ? acc : [acc]);
        }, args)
    }
}


var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, sqrt, addOne);

addOneSqrtAndPrint(1); // 4