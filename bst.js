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


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (val < this.data && this.left) {
            this.left.insert(val)
        } else if(val < this.data) {
            this.left = new Node(val)
        } else if(val > this.data && this.right) {
            this.right.insert(val)
        } else if(val > this.data) {
            this.right = new Node(val)
        }
    }

    isContain(val) {
        if (val == this.data) {
            //return this
            return "yes"
        }

        if(val < this.data && this.left) {
            return this.left.isContain(val)
        } else if(val > this.data && this.right) {
            return this.right.isContain(val)
        }

        //return null
        return "no"
    }
}

function isPresent(arr, k) {
    const res = new Node(arr[0])
    
    arr.forEach((i) => {
        res.insert(i)
    })
    
    return res.isContain(k)
}

inp.on('close', () => {
    console.log(isPresent(arr,k))
})
