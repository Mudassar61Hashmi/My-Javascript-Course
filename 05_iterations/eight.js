// const myNums=[1,2,3]

// const myTotal= myNums.reduce((acc,currVal)=>{
//     console.log(`Accumulator: ${acc} and Current Value: ${currVal}`)
//     return acc+currVal
// },0)

// console.log(`Total= ${myTotal}`)

const shoppingCart=[
    {
        courseName: "Javascript",
        price: 4999
    },
    {
        courseName: "Python",
        price: 3999
    },
]
const cartTotal= shoppingCart.reduce((acc,currVal)=>{
    return acc+currVal.price
},0)
console.log(cartTotal)