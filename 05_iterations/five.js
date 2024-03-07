// const userData= ["User1","User2","User3"]

// userData.forEach((val,index)=>{
// console.log(`The index ${index} have ${val}`)
// })

const languages=[
    {
        langExt: "js",
        langName: "Javascript"
    },
    {
        langExt: "cpp",
        langName: "C Plus Plus"
    },
    {
        langExt: "py",
        langName: "Python"
    },
]

languages.forEach((item)=>{
    const {langExt,langName}= item;
    console.log(`This ${langExt} is for ${langName}`)
})
