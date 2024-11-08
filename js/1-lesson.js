//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).

function getQuater(number) {
  if (number >= 0 && number <= 14) {
    return `Число ${number} підпадає під першу чверть.`;
  } else if (number >= 15 && number <= 29) {
    return `Число ${number} підпадає під другу чверть.`;
  } else if (number >= 30 && number <= 44) {
    return `Число ${number} підпадає під третю чверть.`;
  } else if (number >= 45 && number <= 59) {
    return `Число ${number} підпадає під четверту чверть.`;
  } else {
    return `Число ${number} не підпадає ні під яку чверть.`;
  }
}
// const askNumber = Number(prompt());
// console.log(getQuater(askNumber));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

function getSeason(number) {
  let result = "";
  switch (number) {
    case 1:
      result = "Зима";
      break;

    case 2:
      result = "Весна";
      break;

    case 3:
      result = "Літо";
      break;

    case 4:
      result = "Осінь";
      break;
    default:
      result = "Неправельно ведене значення";
      break;
  }

  return result;
}
// const season = Number(prompt());
// console.log(getSeason(season));

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max і поверніть результат з функції

function logNumbers(min, max) {
  let numbers = 0;

  for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
      numbers += i;
    }
  }
  return numbers;
}

// console.log(logNumbers(2, 55));

// Напишіть функцію fizzBuzz яка приймає число
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

function getfizzBuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "fizzbuzz";
  } else if (number % 3 == 0) {
    return "fizz";
  } else if (number % 5 == 0) {
    return "buzz";
  } else return "Жодна умова не виконана";
}
console.log(getfizzBuzz(18));

//Завдання на самостійну роботу
//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const userRule = prompt("Введіть логін");
// console.log("userRule: ", userRule);
 


const userLogin = prompt("Введіть логін");
if (userLogin === null || userLogin === "") {
  console.log("Скасовано");
} else if (userLogin === "Адмін") {
  const userRule = prompt("Введіть пароль");
  
  if (userRule === null || userRule === "") {
    console.log("Скасовано");
  } else if (userRule === "Я головний") {
    console.log("Добрий день!");
  } else {
    console.log("Невірний пароль!");
  }
} else {
  console.log("Я вас не знаю");
}



  
