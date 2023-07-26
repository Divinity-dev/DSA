// const majority = (arr)=>{
//  const majority = {}
//  for(let x of arr)
// }
const majorityElement = function(nums) {
    let counts = {}
    const majority = Math.floor(nums.length/2)
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1
        if (counts[num] > majority) {
            return num
        }
    }
}

const nums = [2,2,1,1,1,2,2]
const major = majorityElement(nums)
console.log(major)
console.log(majorityElement([10, 5, 5,5,5,3,3,12,5]))