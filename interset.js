/*
Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/
const interset = (arr, arr1)=>{
    let els = []
  for(let array of arr){
    if(arr1.includes(array)){
        els.push(array)
    }
  }
  const set = new Set(els)
  return Array.from(set);
}

console.log(interset([1,2,2,1],[2,2]))
console.log(interset([4,9,5],[9,4,9,8,4]))