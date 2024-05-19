let number=[23,12,10,14];

let even=[];
for(i=0;i<number.length;i++){
	if(number[i]%2==0){
		even.push(number[i]);
		
	}
	console.log(`Even numbers in an array are: ${even}`);
}