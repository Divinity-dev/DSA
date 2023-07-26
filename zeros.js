/*
Given an integer array nums, create a function that moves all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

**Example 2:**
Input: nums = [0]
Output: [0]


create an array
push all zeros in it
then add it to nums array
*/
const zeros = (nums)=>{
    // let j = 0;

    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] !== 0) {
    //     // Swap the non-zero element with the leftPointer position
    //     let temp = nums[j];
    //     nums[j] = nums[i];
    //     nums[i] = temp;
  
    //     j++; // Move the leftPointer forward to the next position
    //   }
    // }
    // return nums
    let count = 0;
    for (let i = nums.length-1; i >= 0 ; i--){
        if(nums[i] === 0){
            nums.splice(i,1)
            count++
        }
    }
    for(let i = 0; i< count; i++){
        nums.push(0)
    }
    return nums
}
console.log(zeros([0,1,0,3,12]))