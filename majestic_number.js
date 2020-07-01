const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b;
var count = 0;
ip.on('line', (ans) => {
    if (count === 0){
        a = parseInt(ans);
        count++;
    }
    else if (count ==1){
        b = ans.split(' ').map(n => Number(n)).splice(0,a+1);
        count++;
    }
    else{
        return
    }

});

function majestic(n,m){
    return n[0]+n[1]+n[2] == n[m-1]+n[m-2]+n[m-3] ? 1:0
}

ip.on('close', () => {console.log(majestic(b,a))})
