function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  const credits = customerCredits - totalPrice;
    if (customerCredits < totalPrice) {
      message = "Insufficient funds!";
    } else { 
      message = `You ordered ${orderedQuantity} droids, you have ${credits} credits left.`;
    }
  // Change code above this line
  return message;
}