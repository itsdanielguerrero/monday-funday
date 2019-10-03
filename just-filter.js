/*
Daniel Guerrero - 10/02/19
practicing code mid-class - using filter functions to manipulate arrays
*/

//declare an array of numbers
let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//declare a new variable and use filter on ages array
let ableToBuyLotto = ages.filter((age) => {
    return age >= 18 //predicate statement
})

//print statment - should print '18, 19, 29'
console.log(ableToBuyLotto)