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

/* function findLongestWord(string) { 
  const words = string.split(" ");
  let longestWords = "";
  for (let word of words) { 
    if (word.length > longestWords.length) { 
      longestWords = word;
    }
  } return longestWords;
}
const string = "Nunc sed turpis a felis in nunc fringilla";
console.log(findLongestWord(string)); */

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
//   John: 2870,
// };
// function getTotalSum(salaries) {
//   let total = 0;
//   for (const sp of Object.values(salaries)) {
//     total += sp;
//   }
//   return total;
// }
// console.log(getTotalSum(salaries));


// /Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
// //з ​​таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotal(stones, stonesName) {
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       return `Total ${stonesName} = ${stone.price * stone.quantity}`
//     }
//   }
// }
// console.log('stones :>> ', calcTotal(stones, "Смарагд"));


// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];
function groupedStudents(students) {
  
  const allStudents = {};
  for (let student of students) {
    console.log(allStudents[student.course]);

    if (!allStudents[student.course]) {
      allStudents[student.course] = [];
    };
    allStudents[student.course].push(student);
    // console.log(allStudents[student.course]);
    // console.log(allStudents);
  }
  return allStudents;
}
console.log(groupedStudents(students));
