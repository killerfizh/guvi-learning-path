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

class Queue {
    constructor() {
        this.data = []
    }

    add(record) {
        this.data.unshift(record)
    }

    remove() {
        return this.data.pop()
    }
}

function revQ(arr) {
    const res = new Queue()
    
    arr.forEach((i) => {
        res.add(i)
    })
    
    return res.data.join(' ')
}

inp.on('close', () => {
    console.log(revQ(arr))
})
