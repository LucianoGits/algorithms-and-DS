const printMatrix = (twoDimentionalArr) => {
  for (let i = 0; i < twoDimentionalArr.length; i++) {
    for (let j = 0; j < twoDimentionalArr[i].length; j++) {
      console.log(twoDimentionalArr[i][j]);
    }
  }
};

printMatrix([
  [1, 2, 3, 4],
  [5, 7, 8, 9],
]);
