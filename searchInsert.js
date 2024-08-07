/* Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4  */
const searchInsert = (arr, val)=>{
    let index = 0;
 for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
        index = i;
    }else if(arr[i] > val){
        index = i -1
    }else{
        index = arr.length
    }
 }
 return index
}

console.log(searchInsert( [1,3,5,],2))