const isUserLoggedIn= true
const temperature= 41
if(temperature===40){
    // console.log("less than 50")
}
else{
    // console.log("temperature is greater than 50")
}
const marks= prompt("Enter marks: ")


// const userLoggedIn= true
// const debitCard= false
// const loggedInFromGoogle= false
// const loggedInFromFacebook= true

const {userLoggedIn, debitCard, loggedInFromFacebook, loggedInFromGoogle} = [true, false, false, true]

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromFacebook || loggedInFromGoogle){
    console.log("User Logged In")
}
