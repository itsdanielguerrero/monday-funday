let ages = [10,11,12,13,14,15,16,17,18,19,20]

let inHighSchool = ages.filter((age) =>{
    return age > 13 && age <19
})
console.log(inHighSchool)

let displayHSAges = inHighSchool.map( (age) => {
    return 'If this is your age ' + age + ' then, you are probably stil in High School'
} )

console.log(displayHSAges)