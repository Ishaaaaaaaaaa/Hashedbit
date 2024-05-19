let string = 'INDIA';

let chars = string.split(''); 

chars.splice(4, 0, 'O', 'N', 'E', 'S', 'I', 'A'); 
let newString = chars.join(''); 

console.log(newString); 
