 var partition = function(arr, left, right){
     var pivot = arr[left];
     var i = left;
     var j = right;
     while(i <= j){
         while(arr[i] < pivot){
             i++;
         }
         while(arr[j] > pivot){
             j--;
         }
         if(i >= j){
            return j;
         }
        [arr[i], arr[j]] = [arr[j], arr[i]];
     }
}
 var sort = function(arr, left,right){
     if(left >= right){
         return;
     }
     var pivot = partition(arr, left,right);
     sort(arr,left,pivot);
     sort(arr, pivot + 1, right);
}
var quicksort = function(arr){
    sort(arr, 0, arr.length - 1);
    return arr;
}
var res = quicksort([1,8,3,4,2,7]);
console.log(res);