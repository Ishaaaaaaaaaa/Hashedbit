function removeVowelNames(names) {

    const vowels = new Set("aeiouAEIOU"); 
    return names.filter(name => !vowels.has(name[0])); 
  }
  
  
  const names = ["Alice",  "Charlie", "pranali", "David", "ishaaa"];
  const namesWithoutVowels = removeVowelNames(names);
  console.log(namesWithoutVowels); 