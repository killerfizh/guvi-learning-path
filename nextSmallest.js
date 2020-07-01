const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0;
var n,arr;

inp.on("line", (data) => {
  if (count === 0) {
      n = data.split(' ').map(n => Number(n))
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


function nextSmallest(arr) {
    res = []
    for(let i = 0; i< arr.length; i++) {
        let temp = -1;
        for(let j = i+1; j< arr.length; j++) {
         if(arr[i] > arr[j]) {
            temp = arr[j]
             break; 
         }

        }

        res.push(temp)
        
    }
 
    return res 
}


inp.on('close', () => {
    console.log(nextSmallest(arr).join(' '))
})
