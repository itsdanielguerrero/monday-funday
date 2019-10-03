/*
Daniel Guerrero - 10/02/19
practicing code mid-class - using map reduce and filter functions to manipulate arrays
*/

//initialize an array with cars make model and year
var cars = [
    {make: 'Toyota', model: 'Camry', year: 2016},
    {make: 'Fiat', model: 'Spider', year: 2015},
    {make: 'Honda', model: 'Accord', year: 2016},
    {make: 'Kia', model: 'Soul', year: 2017},
    {make: 'Hummer', model: 'H2', year: 2015},
    {make: 'Chevy', model: 'Impala', year: 2015}
]

//using filter
var sameYear = cars.filter( (car) => {
    return car.year === 2015
} )

console.log(sameYear)

//using map
var displayData = cars.map( (car) => {
    return 'This car is a ' + car.model + ' and it is made by ' + car.make + ' in the year ' + car.year + '.'
} )

console.log(displayData)

//using reduce
function onTable (table, year){
    if (table[year]){
        return table[year]
    }
    return[]
}

var byYear = cars.reduce( (table, car) => {
    const {make, model, year} = car
    const currentCar = onTable(table, year)

    addCar = currentCar.concat(make + "-" + model)
    return {...table, [year]: addCar}
},{})

console.log (byYear)