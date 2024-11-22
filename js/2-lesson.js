//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12, 1];
function findSmallerNumber(number) {
  return Math.min(...number);
}
console.log(findSmallerNumber(numbers));
