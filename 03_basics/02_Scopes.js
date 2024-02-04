var a=10
let b=20
const c= 30

if(true){
    let b=25
    const c= 35
    var a=15
    // console.log("Inner",a)
}

// console.log(a)
/*Finally, Var have a global scope & Let,Const are block scopre */


// function one () {
//     const userName= "Mudassar"

//     function two() {
//         const socialLink= "Facebook"
//         // console.log(userName);
//     }
//     // console.log(socialLink);
//     // two()
// }

// one()

if(true){
    const userName= "Mudassar Hashmi"
    
    if(userName==="Mudassar Hashmi"){
        const website = "FB"
        // console.log(userName+website);
    }
 
// console.log(userName)
// console.log(website)
}
console.log(addOne(5))

function addOne(num) {
    return num +1
}

addTwo(5)

const addTwo= function(num){
    return num+2
}