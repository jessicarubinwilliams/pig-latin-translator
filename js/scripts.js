// let isAVowel = false; 
// const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// vowelsArray.forEach(function(vowel) {
//   if (vowel === "e") {
//     isAVowel = true;
//   };
//   console.log("Looped!")
// });
// isAVowel

let isAVowel = false; 
  const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let index = 0; index < vowelsArray.length; index +=1) {
    if (vowelsArray[index] === "e") {
      isAVowel = true;
      break;
    };
    console.log("Looped!");
  }
isAVowel