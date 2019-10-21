function letsMakeADeal(existingBook, incomingOrder) {
    let ordersThatBenefit = existingBook.filter((currentItem) => {
      const {type, quantity, price} = currentItem
      return type !== incomingOrder.type && price > incomingOrder.price 
        && price <= incomingOrder.price + 100 && quantity === incomingOrder.quantity
    })
    console.log(ordersThatBenefit)
  
    if (ordersThatBenefit.price < incomingOrder.price && incomingOrder.type === 'sell'){
      for (var i = 0; i < existingBook.length; i++){
        if (existingBook[i].quantity === ordersThatBenefit[0].quantity 
            && existingBook[i].price === ordersThatBenefit[0].price
            && existingBook[i].type === ordersThatBenefit[0].type){
          existingBook.splice(i, 1)
          i = existingBook.length
        }
      }
      return existingBook
    }
  }