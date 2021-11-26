
function findDuplicates(arr){
    return arr.filter(function(el, index){
        return arr.indexOf(el) !== index;
    })
}

function filterArr(arr, fn){
    var res = findDuplicates(arr);
    return arr.filter(el => !res.includes(el));
}

var arr = [1, 5,4,5,3,2,1,7];
var result = filterArr(arr, findDuplicates);
console.log(result);