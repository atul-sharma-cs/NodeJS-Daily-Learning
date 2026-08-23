// let arr = [1, 2, 3, 4];

// let ans = arr.filter(function(val){
//   if(val>3) {return true}
//   else return false;
// })

// console.log(ans)


var blob = await fetch(`http://randomuser.me/api/`);
var res = await blob.json()

console.log(res)