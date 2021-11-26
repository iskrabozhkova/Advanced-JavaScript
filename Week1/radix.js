//get max length of integers
// 1 121 32 --> max is 3
  var getMax = function(arr){
      var max = 0;
      for(var i in arr){
          if(arr[i].toString().length > max){
              max = arr[i].toString().length;
          }
      }
      return max;
    }

var getNum = function(num, i){
    var numToStr = num.toString();
    var end = numToStr.length - 1;
    var result = numToStr[end - i];

    if(result === undefined){
        return 0;
    }else{
        return result;
    }
}

var radixSort = function(arr){
    var maxLength = getMax(arr);

    for(var i=0; i < maxLength; i++){
        var buckets = Array.from({length: 10}, () => []);

        for(var j = 0; j < arr.length; j++){
            var num = getNum(arr[j], i);
            buckets[num].push(arr[j]);
        }

        arr = buckets.reduce((acc, curr) => acc.concat(curr), []);
    }
    return arr;
}

 var arr = [1,52,1563,12, 153,48];
 console.log(radixSort(arr));
