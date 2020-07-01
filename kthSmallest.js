const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0;
var n,k,arr;

inp.on("line", (data) => {
  if (count === 0) {
      n = data.split(' ').map(n => Number(n))[0]
      k = data.split(' ').map(n => Number(n))[1]
      count++
  }
  
  else if (count == 1) {
      arr = data.split(' ').map(n => Number(n))
      arr = arr.splice(0,n)
      count++
  }
  
  else {
      return
  }
});


function sorting(arr) {
    let res = [];
    arr.forEach((n) => {
        if (res.indexOf(n) === -1) {
            res.push(n)
        }
    })
    return res.sort((a,b) => a-b)
}

//forEach ---> O(n)
//Sort -----> O(nlogn)

function getKthSmallest(arr, k) {
        let res = sorting(arr)
        if(!res[k-1]){
            return "-1"
        }
        return res[k-1]

}



inp.on('close', () => {
   console.log(getKthSmallest(arr, k))
})
