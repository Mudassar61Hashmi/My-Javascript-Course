const mySym= Symbol("key1")

const userData={
    name: "Mudassar Hashmi",
    desi: "Front End Developer",
    //for symbol
    [mySym]: "mykey1",
    age: 21,
    isLoggedIn: true,
    email: "hashmig48@gmail.com",

}
//Access Obj Method 1
// console.log(userData.name);
//Access Obj Method 2
// console.log(userData["email"]);
// console.log(`My Name is ${userData.name} and I am ${userData.desi}.`)
//Access Symbol
// console.log(userData[mySym])

userData.email= "info@example.com"
// Object.freeze(userData)
userData.email="hashmi@123.com"
// console.log(userData)

userData.greeting= function(){
    console.log("Hello User 1");
}
userData.greeting2= function(){
    console.log(`Hello User ${this.name}`);
}

console.log(userData.greeting());
console.log(userData.greeting2());