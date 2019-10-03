/*
Daniel Guerrero - 10/02/19
practicing code mid-class - using map reduce and filter functions to manipulate arrays
*/

//initialize an array with cars make model and year
var cars = [
    {make: 'Toyota', model: 'Camry', year: 2016},
    {make: 'Fiat', model: 'Spider', year: 2015},
    {make: 'Honda', model: 'Accord', year: 2016},
    {make: 'Kia', model: 'Soul', year: 2017}
    {make: 'Hummer', model: 'H2', year: 2015},
    {make: 'Chevy', model: 'Impala', year: 2015},
]

var sameYear = cars.filter( (car) => {
    return car.year === 2015
} )

console.log(sameYear)

var makeModel = cars.map( (car) => {
    return 'This car is a ' + car.model + ' and it is made by ' + car.make + '.'
} )

console.log(makeModel)

var byYear = cars.reduce( (table, car) => {
    const {make, model, year} = cars
    const currentCar = []
    if (table[year]){
        currentCar = table.year
    }
    addCar = currentCar.concat(make, model)
    return {...table, [year]: addCar}
},{})