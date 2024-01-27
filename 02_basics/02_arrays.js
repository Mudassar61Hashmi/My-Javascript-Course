const collFri= ["Jawad","Hamza","Daniyal","Rehan"]
const newList=["test1", "test2","test3"]
// console.log(Array.isArray(collFri))
const allData= [...collFri,...newList]
// console.log(allData)
// console.log(newList[2][3]);

// newList.push("test4")
// console.log(newList)
// console.log(newArr);
const concatArr= collFri.concat(newList)
// console.log(concatArr);

const another_array= [1,2,3,[2,5,6,[7,8,9]]]
// const orgArr= another_array.flat(Infinity)
// console.log(orgArr)

// console.log(Array.from("Hashmi"));
console.log(Array.from({name:"Hashmi"}));

let score =100
let score2= 200
let score3= 300

console.log(Array.of(score,score2,score3));