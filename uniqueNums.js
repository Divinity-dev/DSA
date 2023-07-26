/*
Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both.
 In other words, return the symmetric difference between the two arrays.

You can return the array with its elements in any order.

******************Example 1:******************

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
*/
const uniqueNums = (arr) => {
    const set = new Set(arr)
    return Array.from(set).length;
}
console.log(uniqueNums([0,0,1,1,1,2,2,3,3,4]))