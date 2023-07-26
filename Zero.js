// Coding challenge: Move ZeroesGiven an integer array nums, create a function that moves all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in place without making a copy of the array.**Example 1:**Input: nums = [0,1,0,3,12]Output: [1,3,12,0,0]**Example 2:**Input: nums = [0]Output: [0]
const zeros = (arr)=>{
    let count = 0;
for(let x of arr){
    if(x === 0){
        arr.splice(arr.indexOf(x), 1)
        count++
    }
}
for(let i = 0; i < count; i++){
    arr.push(0)
}
return arr;
}
console.log(zeros([0,1,0,3,12]))