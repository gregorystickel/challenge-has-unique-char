// Write your code below


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    console.log(uniqueChars);
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    console.log(uniqueChars);
    return uniqueChars.size === word.length
  }
  console.log(hasUniqueChars(`Moonday`));