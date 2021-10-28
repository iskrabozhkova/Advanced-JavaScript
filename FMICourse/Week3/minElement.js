
function cmp(a,b){
  return a - b;
  //10 and 5 => 5 => a is bigger
  //5 and 10 => -5 => a is smaller
}
function getMinElement(arr, cmp){
   return arr.reduce(function (acc, curr){
        var res = cmp(acc,curr);
        if(res > 0){
            return curr;
        }else{
            return acc;
        }
    }, arr[0])
}

var arr = [2,1,5,7];

var result = getMinElement(arr, cmp);
console.log(result);