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
// const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];

// function caclculateAverage(arr) {
//   let sumIteration = 0;
//   let sum = 0;

//   for (const arg of arr) {
//     if (typeof arg === "number") {

//       console.log(arg);
//       sum += arg;
//       sumIteration += 1;
//     }
//   }
//   return sum / sumIteration;
// }

// console.log(caclculateAverage(arr));


//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

// const string = "Nunc sed turpis a felis in nunc fringilla"

function findLongestWord(string) { 
  const words = string.split(" ");
  let longestWords = "";
  for (let word of words) { 
    if (word.length > longestWords.length) { 
      longestWords = word;
    }
  } return longestWords;
}
const string = "Nunc sed turpis a felis in nunc fringilla";
console.log(findLongestWord(string));