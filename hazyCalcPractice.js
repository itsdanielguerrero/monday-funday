  
function isSkippedValue(value) {
    //return !value
    switch (value) {
        case '': 
            return true
        case undefined:
            return true
        default:
            return false
    }
  }
  
  function isNumericValue(value) {
    return !isNaN(value)
  }
  
  function isNothingValue(value) {
    return value === null
  }
  
  function isAcceptableValue(value) {
    const operators = ['+', '-', '*', '/']
    return typeof value === Number || typeof Number(value) === 'number' || operators.includes(value)
  }
  
  function performCalculationStep(firstOperand, operator, secondOperand) {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      default:
        throw new Error('Invalid input!')
    }
  }
  
  function calculate(calculationSteps) {
    let total
    let operator
  
    calculationSteps.forEach(nextCalculationStep => {
      if (!isAcceptableValue(nextCalculationStep)) {
        throw new Error('Invalid input!')
      }
  
      if (isNothingValue(total) && isNumericValue(nextCalculationStep)) {
        total = Number(nextCalculationStep)
  
      } else if (isNothingValue(operator) && isSkippedValue(nextCalculationStep)) {
        operator = nextCalculationStep
  
      } else if (isNumericValue(nextCalculationStep)) {
        total = performCalculationStep(total, operator, Number(nextCalculationStep))
        operator = null
  
      } else if (!isSkippedValue(nextCalculationStep)) {
        throw new Error('Invalid input!')
      }
    })
  
    return total
  }

try{
const calculationSteps = ['2', '*', 4]
let result = calculate(calculationSteps)
console.log(result)
} catch (error){
    console.log(error.message)
}