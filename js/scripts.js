// let isAVowel = false; 
// const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// vowelsArray.forEach(function(vowel) {
//   if (vowel === "e") {
//     isAVowel = true;
//   };
//   console.log("Looped!")
// });
// isAVowel

// let isAVowel = false; 
//   const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   for (let index = 0; index < vowelsArray.length; index +=1) {
//     if (vowelsArray[index] === "e") {
//       isAVowel = true;
//       break;
//     };
//     console.log("Looped!");
//   }
// isAVowel

// function vowelDetector(vowelsArray, firstCharacter) {
//   for (let index = 0; index < vowelsArray.length; index +=1) {
//     if (vowelsArray[index] === firstCharacter) {
//       return true;
//     };
//     console.log("Looped!");
//   }
//   return false;
// }

// const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// const firstCharacter1 = "e";
// const firstCharacter2 = "b";
// vowelDetector(vowelsArray, firstCharacter1);
// vowelDetector(vowelsArray, firstCharacter2);

function vowelDetector(vowelsArray, firstCharacter) {
  for (let index = 0; index < vowelsArray.length; index +=1) {
    if (vowelsArray[index] === firstCharacter) {
      return true;
    };
    console.log("Looped!");
  }
  return false;
}

let userInput = "Ice"
const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
const firstCharacter = userInput.charAt(0);
vowelDetector(vowelsArray, firstCharacter);