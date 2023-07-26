// Compare two arrays and return a new array with any items only found in one of the two given arrays,
//  but not both.
//  In other words, return the symmetric difference between the two arrays.

// You can return the array with its elements in any order.

// ******************Example 1:******************

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
const arrays = (x, y)=> {
    let arr = [];
    for(let a of y){
        if(x.includes(a)){
            x.splice(x.indexOf(a), 1)
            y.splice(y.indexOf(a), 1)
        }
        
    }

    arr.push(x)
    arr.push(y)
return arr;

}
let x = [1,2,3]
let y = [2,4,6]
console.log(arrays(x,y ));
