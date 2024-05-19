function countVowelsAndConsonants(text) {
    if (text.length < 20) {
      throw new Error("String must have at least 20 characters.");
    }
  
    const vowels = "aeiouAEIOU";
    let consonants = 0;
    let vowelsCount = 0;
  
    for (let char of text) {
      if (/[a-z]|[A-Z]/.test(char)) { 
        char = char.toLowerCase(); 
        if (vowels.includes(char)) {
          vowelsCount++;
        } else {
          consonants++;
        }
      }
    }
  
    return {
      consonants,
      vowels: vowelsCount,
    };
  }
  
  const text = "This is a sample string with more than 20 characters.";
  
  try {
    const result = countVowelsAndConsonants(text);
    console.log("Consonants:", result.consonants);
    console.log("Vowels:", result.vowels);
  } catch (error) {
    console.error(error.message);
  }
  