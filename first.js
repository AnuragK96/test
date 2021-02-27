
// Write code to initialize array c with set operation b - a
// i.e. c should contain [5,3,10,12]*/
function find(a,val){
]for(let i = 0; i< a.length; i++){
    if(a[i] == val) return true;
  }
  return false;
}
function set(a,b){
  let c = [];
  for(let i = 0; i< b.length; i++){
    if(!find(a, b[i])) c.push(b[i]);
  }
  return c;
}


var a = [1,4,6,2,9,7,11];
var b = [1,2,5,3,9,6,10,12];
var c = set(a,b);
console.log(c);