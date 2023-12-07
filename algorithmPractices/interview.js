//most repeated letter

const solution = (str) => {
  let maxCount = 0,
    mostRepeatedChar;

  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostRepeatedChar = str[i];
    }
  }
  console.log(`most repeated character: ${mostRepeatedChar}`);
  console.log(`Count: ${maxCount}`);
};

solution("1111531");

function squareDigits(num) {
  if (num === 0) return 0;
  let result = "";

  const numArray = num.toString().split("");

  for (let i = 0; i < numArray.length; i++) {
    let square = Number(numArray[i]) ** 2;
    result += square;
  }
  return Number(result);
}
console.log(squareDigits(3212));
