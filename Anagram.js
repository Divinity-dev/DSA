const isAnagram = (s,t)=> {
  for(let str of s){
    if(t.includes(str) && s.length === t.length){
        return 'true'
    }
  }
  return false
}
console.log(isAnagram("anagram","nagaram"))
console.log(isAnagram("trex","strex"))