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
// const swapButton = document.querySelector("#swapButton");
// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");
// console.log(swapButton, leftInput, rightInput);
// swapButton.addEventListener("click", () => {
//   const swapper = leftInput.value;
//   leftInput.value = rightInput.value;
//   rightInput.value = swapper;
// });

/* <!-- ЗАДАЧА 3 -->
    <!-- <div>
      <p class="taskTitle">ЗАДАЧА 3</p>
      <input id="passwordInput" type="text" />
      <button id="passwordButton">Приховати</button>
    </div> -->
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
 */

// const passwordInput = document.querySelector("#passwordInput");
// const passwordButton = document.querySelector("#passwordButton");

// passwordButton.addEventListener("click", () => {
//   if (passwordInput.type === "text") {
//     passwordInput.type = "password";
//     passwordButton.textContent = "Розкрити";
//   } else {
//     passwordInput.type = "password";
//     passwordButton.textContent = "Приховати";
//   }
// });

// <!-- ЗАДАЧА 4 -->

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.//

*/

// const boxContainer = document.querySelector("#box");
// const mainContainer = document.querySelector(".container-task-4");

// mainContainer.addEventListener("click", (eve) => {
//   console.log(eve.target.id === "decrease");
//   if (eve.target.id === "decrease") {
//     console.log(getComputedStyle(boxContainer).width);
//     const width = parseInt(getComputedStyle(boxContainer).width);
//     const height = parseInt(getComputedStyle(boxContainer).height);
//     console.log(width);

//     const widthOfChange = `${width - 10}px`;
//     const heightOfChange = `${height - 10}px`;
//     boxContainer.style.width = widthOfChange;
//     boxContainer.style.height = heightOfChange;
//     console.log(widthOfChange);
//   } else if (eve.target.id === "increase") {
//     const width = parseInt(getComputedStyle(boxContainer).width);
//     const height = parseInt(getComputedStyle(boxContainer).height);
//     const widthOfChange = `${width + 10}px`;
//     const heightOfChange = `${height + 10}px`;
//     boxContainer.style.width = widthOfChange;
//     boxContainer.style.height = heightOfChange;
//   }
// });
