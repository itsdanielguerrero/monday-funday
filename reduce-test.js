/*
author - Daniel Guerrero
date - 10/02/19
testing reduce functions for array of objects
I want to use reduce to sort a unorganized list of pets by petType
*/

//define array of objects. each object in this array has a property of petType and name
const listOfPets = [
    {petType: 'Dog', name: 'Timon'},
    {petType: 'GuineaPig', name: 'Nibbles'},
    {petType: 'Cat', name: 'Popcorn'},
    {petType: 'Fish', name: 'Great Gaspy'},
    {petType: 'Dog', name: 'Sparky'},
    {petType: 'Cat', name: 'Whiskey'},
    {petType: 'GuineaPig', name: 'Captain Crunch'},
    {petType: 'Cat', name: 'Purrdy'}
]

//printout each object in array
console.log('Original List of Pets \n')
//forEach function is looping through my array and printing each objects properties
listOfPets.forEach((pet) => {
    console.log('-- ' + pet.petType + ' Name: ' + pet.name )
})
console.log('\n') 

//use reduce to sort array above by pet type
const byPetType = listOfPets.reduce((table, pet) => {
    const {petType, name} = pet //pull properties of each object into new variables
    var petOnT = [] //initialize a new blank array
    //if table has a category for current object then set new array 
    //equal to that category
    if (table[petType]){
        petOnT = table[petType]
    }
    //update the category and add new animals petType and name
    const updatedT = petOnT.concat({petType, name})
    //update table
    return {...table, [petType]: updatedT}
}, {})
//at end of this reduce I am expecting a Object that has set each petType on OG list
//to be a property of my new Object

//print out new Object by category/property
console.log('This list of Pets is now sorted by animal \n')
var listProperties = Object.getOwnPropertyNames(byPetType) //returns a array with each property name on it

const {Dog, Cat, GuineaPig, Fish} = byPetType //pulling values of each property into new variables
//in this case value is an array so I can use forEach to print out all positions in my arrays/petTypes

console.log('------- DOG -------\n')
Dog.forEach((pet) => {
    console.log(pet)
})
console.log('\n------- GUINEAPIG -------\n')
GuineaPig.forEach((pet) => {
    console.log(pet)
})
console.log('\n------- CAT -------\n')
Cat.forEach((pet) => {
    console.log(pet)
})
console.log('\n------- FISH -------\n')
Fish.forEach((pet) => {
    console.log(pet)
})