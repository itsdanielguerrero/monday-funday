let name
let nothing = undefined
let nullNothing = null

console.log(name)
console.log(nothing)
console.log(nullNothing)



var x = '1' + Number(null) 
let number = Number(x) * 2
console.log(number)

let arrObj = [
    {make: 'fiat', model: 500},
    0,
    {name: 'Dan', age: 26},
    null,
    {},
    undefined
]

let result = arrObj.filter ((current) => {
    return current === null
})
console.log(result)

let result1 = arrObj.filter ((current) => {
    return current !== null
})
console.log(result1)

let result2 = arrObj.filter ((current) => {
    return current === 0
})
console.log(result2)

let today = new Date (null)
console.log(today)

let today1 = new Date (0)
console.log(today1)

let today2 = new Date (undefined)
console.log(today2)

/*
let Dan = null
console.log(Dan)
Dan.last = 'Guerrero'
console.log(Dan)
*/