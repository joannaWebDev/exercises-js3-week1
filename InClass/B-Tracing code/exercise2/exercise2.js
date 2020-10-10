const removeVowels = word => {
  const characters = word.split("");
  const result = [];
  characters.forEach(character => {
    if (character === "a" || character === "o" || character === "i" || character === "e" || character === "u") {
      result.push(character);
    } else {
      result.push("_");
    }
  });
  return result.join("");
};
const removeVowelsForWords = words => words.map(word => removeVowels(word));
/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
const result = removeVowels("samuel");
/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/
const resultFromWords = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
console.log(resultFromWords);