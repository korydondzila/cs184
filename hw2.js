#!/usr/bin/env node

var primes = [];
var i = 0
var s = 0;
for(i = 0; i < 1000; i ++){
    primes.push(i + 2);
}

var nums = [];
for(i = 0; i < 1000; i++){
    for(s = 0; s < i+1; s++){
        v = (i + 1) % (s + 1);
	if(v === 0 && ((s + 1) != 1 && (s + 1) != (i + 1))){
            if(nums.indexOf(i + 1) === -1){
		nums.push(i + 1);
	    }
	}
    }
}

for(i = 0; i < nums.length; i++){
    if(primes.indexOf(nums[i]) !== -1){
	primes.splice(primes.indexOf(nums[i]), 1);
    }
}

primes = primes.slice(0,100);
var out = primes.join(",");

var fs = require('fs');
var outfile = "hw2.txt";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
