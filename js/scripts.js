let isAVowel = false; 
const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
vowelsArray.forEach(function(vowel) {
  if (vowel === "e") {
    isAVowel = true;
  };
  console.log("Looped!")
});
isAVowel