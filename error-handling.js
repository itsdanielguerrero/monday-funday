try {
    //Ths code here is what will be handled when an error occurs
    var x = y
} catch(errorDetail) {
    //This block of code will run when the block of code in try hits an error
    //per slide 8 of console4 - we have properties for errorDetail Object
    console.log(errorDetail.message)
    console.log(errorDetail.name)
    //console.log(errorDetail.stack)
}