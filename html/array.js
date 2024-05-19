function reverseSentence(str) {
  
    const words = str.split(' ');
  
   
    return words.reduce((reversed, word) => [word, ...reversed], []);
  }
  
  