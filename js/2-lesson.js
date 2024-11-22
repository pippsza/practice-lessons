//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12, 1];
// function findSmallerNumber(number) {
//   return Math.min(...number);
// }
// console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

function caclculateAverage(arr) {
  let sumIteration = 0;
  let sum = 0;

  for (const arg of arr) {
    if (typeof arg === "number") {

      console.log(arg);
      sum += arg;
      sumIteration += 1;
    }
  }
  return sum / sumIteration;
}

console.log(caclculateAverage(arr));
