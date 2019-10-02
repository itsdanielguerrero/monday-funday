//declaring all the types of data that know
var num = 1
var string = 'this is a string'
var array = [1, 2, 3]
var bool = true
var meObject = {
    firstName: 'Daniel',
    lastName: 'Guerrero',
    age: 26
}
var today = new Date() //this is a new one for me on 9/30/19

//print statments to check what my data looks like
console.log('This is an int ' + num)
console.log('This is a string ' + string)
console.log('This is an array ' + array)
console.log('This is a boolean ' + bool)
console.log('This is an object ' + meObject + ' and here are some properties: first name = ' + meObject.firstName + ' and \n' 
    + 'last name = ' + meObject.lastName + ' and age = ' + meObject.age)
console.log('This is a date ' + today)