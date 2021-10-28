
function compose(){
    var funs = Array.prototype.slice.call(arguments).reverse();
    return function helper(){
        var args = Array.prototype.slice.call(arguments);
        for(var i in funs){
            args = funs[i].apply(undefined,  args instanceof Array ? args : [args]);
        }
        return args;
    }
}


var addOne = (x) => x + 1;
var sqrt = (x) => x * x;
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, sqrt, addOne);

addOneSqrtAndPrint(1); // 4