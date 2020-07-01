const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0;
var n,arr;

inp.on("line", (data) => {
  if (count === 0) {
      n = Number(data)
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



function maxSum_incrArr(array) {
    var result = 0;
    
    for(var i=0; i<array.length; i++) {
        
        var current_sum = array[i]
    
        while(i+1 < array.length && array[i]<array[i+1]) {
            current_sum += array[i+1]
            i++;
        }
    
        if (result < current_sum) {
            result = current_sum
        }
    }
    
    return result
}

inp.on('close', () => {
   console.log(maxSum_incrArr(arr))
})


//Run time complexity is O(n)
