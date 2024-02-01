// function addTwoNum(a,b){
// console.log(a+b);
// }
// addTwoNum(3,4)

function addTwoNum(num1,num2) {
    // let res= num1+num2
    // return res

    return num1+num2
}
const res = addTwoNum(5,5)
// console.log(`Result= ${res}`)

function checkUser(userName) {
    if(userName==undefined || userName==""){
        return `Please enter user name`
    }
    return `${userName} just logged in`
}
// console.log(checkUser(""));
// console.log(checkUser("Mudassar"));

/*Handle Objects with Funcion */

function handleObj(anyObj) {
    const {profileId,profileName,profileStatus}= anyObj
    return console.log(`Your Profile ID is ${profileId}, Profile Name is ${profileName} & Profile Status is ${profileStatus}`)
}
// handleObj({
//     profileId:"PID-001122",
//     profileName:"Hashmi",
//     profileStatus: "active"
// })
// handleObj({
//     profileId:"PID-001222",
//     profileName:"Hashmi",
//     profileStatus: "in-active"
// })
// handleObj({
//     profileId:"PID-001322",
//     profileName:"Hashmi",
//     profileStatus: "active"
// })

function handleArr(getArr) {
    return getArr[4]
}
console.log(handleArr([100,200,300,400,500,600]));