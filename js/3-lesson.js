const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames(users) {
//    const usersName = [];
//    for(const user of users){
//   usersName.push(user.name)
//    }
//    return usersName

// }
// const getUserNames = users => users
// .map((user => user.name))

// console.log(getUserNames(users));

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// const getEyeEyeUser = (users, color) =>
//   users.filter((user) => user.eyeColor === color).map((user) => user.name);

// console.table(getEyeEyeUser(users, "blue"));

// const getUserWithGender = (users, gender) =>
//   users.filter((user) => user.gender === gender).map((user) => user.name);

// console.log(getUserWithGender(users, "male"));

// const getUserWithGender = (users, gender) => {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// };

// console.log(getUserWithGender(users, "male"));

// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// }
// console.log(calculateTotalBalance(users)); // 20916

// / Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']

// const getSortedUniqueSkills = (users) => {
//   return users
//     .flatMap((user) => user.skills)
//     .filter((skill, index, arr) => {
//         console.table(`перевірка ${arr.indexOf(skill)} та ${index}`);
//       return arr.indexOf(skill) === index;
//     })
//     .toSorted();
// };

// console.log(getSortedUniqueSkills(users));

/* 

  Реалізуйте клас WorkerManager, який дозволяє управляти списком робітників. Об'єкт повинен мати такі властивості та методи: name,surname, age, position, salary

Властивість workers — масив, у якому зберігаються всі робітники.

Методи:

addWorker(worker) — додає нового робітника в масив workers.
removeWorker(name) — видаляє робітника з масиву за ім'ям. Якщо такого робітника не існує, метод виводить повідомлення про це.
getSalaryByName(name) — повертає зарплату робітника за його */

const rey = [
  {
    name: "Іван",
    surname: "Петров",
    age: 28,
    position: "Дизайнер",
    salary: 25000,
  },
  {
    name: "Олександр",
    surname: "Пташинський",
    age: 30,
    position: "Інженер",
    salary: 40000,
  },
  {
    name: "Олексій",
    surname: "Кудря",
    age: 40,
    position: "Менеджер",
    salary: 30000,
  },
];

class WorkerManager {
  constructor(array) {
    this.workers = array || [];
  }
  addWorker(worker) {
    this.workers.push(worker);
  }
}

addWorker(worker);

const workman = new WorkerManager(rey);

console.log(workman);
