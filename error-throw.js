addOne = function (numberToAdd) {
    //throw an error
    if (numberToAdd === undefined){
        throw new Error('Input value is undefined');
        
    }
    return numberToAdd + 1
}

try {
let result = addOne()
console.log(result)
} catch (errorDetail) {
    console.log(errorDetail.message)
}

function doubleIt (num){
    if (num !== parseInt(num)) {
        throw new Error('Wrong variable type, must provide an integer.')
    }
    return num * 2
}

try {
    var a = '3'
    var result = doubleIt(a)
    console.log(result)
} catch (err) {
    console.log(err.message)

}
