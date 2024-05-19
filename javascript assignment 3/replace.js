function correctFn(sentence, wrong, correct) {
  
    return sentence.replace(wrong.toLowerCase(), correct.toLowerCase(), 1);
  }
  
  
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const correctedSentence = correctFn(sentence, "brown", "red");
  console.log(correctedSentence); 
  