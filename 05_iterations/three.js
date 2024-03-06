const arr= [1,2,3]
for (const i of arr) {
    console.table(arr)
}

const greetings= "Welcome Guys!"
for (const index of greetings) {
    console.table([index])
}

const map= new Map()
map.set("PK","Pakistan")
map.set("SA","Saudia Arbia")
map.set("AFG","Afghanistan")
// console.log(map)
for (const [index,value] of map) {
    console.log(`${index} : ${value}`)
}

const myObj={
    game1: 'Need for speed',
    game2: 'Call of dauty'
}
for (const [key, value] of myObj) {
    console.log(`${key} : ${value}`)
}