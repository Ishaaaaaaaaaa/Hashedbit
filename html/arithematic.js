function calculate(num1,op,num2){
	
	num1=parseFloat(num1);
	num2=parseFloat(num2);
	
	let result;
	switch(op){
		
		case '+':
			result=num1+num2;
			break;
			
		case '-':
			result=num1-num2;
			break;
		
		case '*':
			result=num1-num2;
			break;
			
		case'/':
		 if(num2===0){
			 result="Error:Canoont be divide by zero";
		 }else{
		    result=num1/num2;
		    }
		   
		    break;
		    default:
               result = "Invalid operator";
		    	
	}
	 return result;
}


const num1=5;
const op= "+"
const num2= 8

const answer=calculate(num1,op,num2);
console.log(answer);
