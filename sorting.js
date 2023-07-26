const sorting = (arr)=>{
 for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++ ){
    if(arr[i] === arr[j] && i !== j){
        return true
    }
 }
}
return false
}
console.log(sorting([1,2,3,1]))
console.log(sorting([1,2,3,4]))