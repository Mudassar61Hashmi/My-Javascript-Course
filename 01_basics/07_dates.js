let myDate= new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


const createdDate= new Date(2024, 0,24)
const mycreatedDate= new Date(2024, 0,24,3,3,50)
// console.log(createdDate.toLocaleString());
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp)

let newDate= new Date()
// console.log(newDate.getMonth());

const checkIt= newDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
})
console.log(checkIt);

