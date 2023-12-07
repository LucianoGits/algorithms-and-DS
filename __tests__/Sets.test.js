const {
  findCommonElements,
  findDifference,
} = require("../Data Structures/Sets");

describe("Set DSA tasks", () => {
  it("Find common numbers bewtween arrays using Sets", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(findCommonElements(arr1, arr2)).toEqual([3, 4, 5]);
  });

  it("Find difference in values", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(findDifference(arr1, arr2)).toEqual([1, 2]);
  });
});
