/*First method to create object */

// const tinderUser= new Object()
// console.log(tinderUser);

/*Second method to create object */

const tinderUser={}
tinderUser.id="BC2204"
tinderUser.name= "Mudassar Hashmi"
tinderUser.phone= "03267581232"
// console.log(tinderUser);

/*Object within another obj */

const regularUser={
    userInfo:{
        fullName:{
            firstName: "Mudassar",
            lastName: "Hashmi",
        }
    }
}
// console.log(regularUser.userInfo.fullName)

const obj1={1:"a", 2:"b",3:"c"}
const obj2={4:"d", 5:"e",6:"f"}
const obj3= {...obj1,...obj2}

// console.log(obj3);

/*Array of an Object */
const arrOfobj=[
    {
        id:1,
        userName: "Test User1",
        category: "Author",
    },
    {
        id:2,
        userName: "Test User2",
        category: "Contributor",
    },
    {
        id:3,
        userName: "Test User3",
        category: "Subscriber",
    }
]
// console.log(arrOfobj[1])



const objDeStr={
    courseId: "JS-0011",
    courseName: "JavaScript",
    courseInstruct: "Name ABC",
}
/*object destructuring */
const{courseId, courseName,courseInstruct}= objDeStr;
console.log(courseName);
