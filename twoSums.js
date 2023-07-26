// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// The first loop point to the first element in the array
// The second loop point to the second element in the array
// The if condition sum the two adjacent element from left to right
const twoSums = (arr, target)=>{
    let index = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i] + arr[j] === target){
            index = {
                index1 : i,
                index2 : j
            }
        }
    }
  }
  return index.index1 + ' ' + index.index2
}

console.log(twoSums([2,7,11,15],9))