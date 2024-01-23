const balance= new Number(200)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber= 6757.7585
// console.log(otherNumber.toPrecision(5));

const hundreds= 100000000
// console.log(hundreds.toLocaleString());

//-----------------------Math Methods--------------------
const absValue= -786
const absRes= Math.abs(absValue)
// console.log(absRes);

const maxNum= (510,720,6,1289)
const resMax= Math.max(maxNum)
// console.log(`The Maximum in this list is ${resMax}`);

const ceilNum= 4.05
const resCeil= Math.ceil(ceilNum)
// console.log(resCeil);

const floorNum= 10.07
const resFloor= Math.floor(floorNum)
// console.log(resFloor);

// console.log(Math.random());
// console.log(Math.floor(Math.random()*20)+1);

const maxVal= 30
const minVal= 25

console.log(Math.floor(Math.random()*(maxVal-minVal+1))+minVal);