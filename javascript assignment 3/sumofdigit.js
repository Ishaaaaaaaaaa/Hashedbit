function findRepeatedSum(number) {
    while (number.toString().length > 1) {
      
      const digits = number.toString().split('');
      const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
      number = sum;
    }
    return number;
  }
  
  
  const result = findRepeatedSum(456);
  console.log(result); 
  