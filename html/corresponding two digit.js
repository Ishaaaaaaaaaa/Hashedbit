function sumProductDigits(num1, num2) {
    let sum = 0;
    while (num1 > 0 && num2 > 0) {
      
      const digitProduct = (num1 % 10) * (num2 % 10);
      sum += digitProduct;
  
     
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
    }
    return sum;
  }
  
  
  const n1 = 10;
  const n2 = 34;
  const productSum = sumProductDigits(n1, n2);
  console.log(`Sum of products of digits between ${n1} and ${n2} is: ${productSum}`);
  