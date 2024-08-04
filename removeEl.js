
const removeEl = (arr, val)=>{
  for(let i = arr.length-1; i >=0; i--){
    if(arr[i] === val){
        arr.splice(i,1)
    }
  }
  return arr;
}
console.log(removeEl([0,1,2,2,3,0,4,2],2))