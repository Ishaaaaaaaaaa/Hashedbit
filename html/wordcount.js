function countWords(paragraph) {
   
    const words = paragraph.trim().split(/\s+/);
    
    return words.length;
  }
  
 
  const paragraph = "This is a sample paragraph with multiple sentences. It demonstrates how to count words in JavaScript.";
  const wordCount = countWords(paragraph);
  console.log("Word count:", wordCount);
  