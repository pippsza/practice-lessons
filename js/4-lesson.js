/*Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const showButton = document.querySelector("#alertButton");
// const showInput = document.querySelector("#alertInput");
// console.dir(showInput);
// showButton.addEventListener("click", () => {
//   console.log(showInput.value);
// });
//
//
//
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const swapButton = document.querySelector("#swapButton");
const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");
console.log(swapButton, leftInput, rightInput);
swapButton.addEventListener("click", () => {
  const swapper = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = swapper;
});
