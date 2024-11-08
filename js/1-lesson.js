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
const askNumber = Number(prompt());
console.log(getQuater(askNumber));
