const sumOf5and3 = () => {
  const sumArr = [];
  let index = 0;
  // for (let i = 0; i < 1000; i++) {
  //   if (i % 3 === 0 || i % 5 === 0) {
  //     sumArr.push(i);
  //   }
  // }
  while (index++ < 1000) {
    if (index % 3 === 0 || index % 5 === 0) {
      sumArr.push(index);
    }
  }
  const sumAll = sumArr.reduce(
    (prevVal, currentValue) => prevVal + currentValue
  );
  return sumAll;
};
console.log(sumOf5and3(10));
