function findtask(salary){
	
	if(salary<0){
		return "invalid salary input.Salary cannot be negative";
	}
	
	let taxRate=0;
	switch(true){
		case salary<=500000:
			taxRate=0;
			break;
			
		case salary <=1000000:
			taxRate=0.1;
			break;
			
				
		case salary<=1500000:
			taxRate=0.2;
			break;
			
		default:
			taxRate=0.3;
				
	}
	
	const taxAmount = salary * taxRate;
	 return `Tax amount for salary ₹${salary.toLocaleString()}: ₹${taxAmount.toFixed(2)}`;
}

const salary = 1200000;
const taxInfo = findtask(salary);
console.log(taxInfo);