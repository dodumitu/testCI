let array = [1,2,3,4,5,6]
let newArr =[]
let max;
function adjacentElementsProduct(array) {
  for (let i = 0; i < array.length - 1; i++) {
      newArr.push(array[i] * array[i + 1]);
  }
  
  return max = Math.max(...newArr);
}
console.log(adjacentElementsProduct(array));


// bai 2
let people = [60, 40, 55, 75, 64]
function alternatingSums(people) {
  let line1 = 0;
  let line2 = 0;

  for (let i = 0; i < people.length; i++) {
      if (i % 2 === 0) {
        line1 += people[i];
      } else {
        line2 += people[i];
      }
  }
  let result = [line1, line2];
  return result;
}
console.log(alternatingSums(people));