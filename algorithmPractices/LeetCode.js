var mergeAlternately = function (word1, word2) {
  let mergedLetters = "";
  let maxLength;

  maxLength = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergedLetters += word1[i];
    }
    if (i < word2.length) {
      mergedLetters += word2[i];
    }
  }

  console.log(mergedLetters);
};

mergeAlternately("abc", "2468");
