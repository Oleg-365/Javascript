/*Задание 1 (тайминг 25 минут)
<div class="block">
</div>
1 Дан блок, внутри него необходимо создать
элемент div с классом item, разместить текст
“Элемент внутри” и задать стили
● Цвет текста синий
● Рамка сплошная черная
● Цвет фона #f8f8f8
● Внутренний отступ 16px
1 Добавить данному блоку класс item_1
(использовать setAttribute)*/

const blockEl = document.querySelector(".block");
const itemEl = document.createElement("div");
itemEl.setAttribute("class", "item");
blockEl.appendChild(itemEl);
itemEl.textContent = "Элемент внутри";
itemEl.style.color = "blue";
itemEl.style.border = "1px solid black";
itemEl.style.backgroundColor = "#f8f8f8";
itemEl.style.padding = "16px";
itemEl.setAttribute("class", "item_1");

//-------------------------------------------------
/*Задание 2 
Дан код
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>

Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem*/

const paragraphEl = document.querySelector(".text");
console.log(paragraphEl.previousSibling);
console.log(paragraphEl.previousElementSibling);

console.log(paragraphEl.parentElement);

console.log(paragraphEl.parentElement.previousElementSibling);

console.log(paragraphEl.parentElement.parentElement);
//---------------------------------------------------------
//Задание 3

/*<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей*/

const paragraphElH2 = document.querySelector("h2");

console.log(paragraphElH2.parentElement);
console.log(paragraphElH2.parentElement.parentElement);
console.log(paragraphElH2.parentElement.parentElement.parentElement);
console.log(
  paragraphElH2.parentElement.parentElement.parentElement.parentElement
);
console.log(
  paragraphElH2.parentElement.parentElement.parentElement.parentElement
    .parentElement
);

//---------------------------------------------------
//Задание 4

/*<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным*/

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (input.value.trim() === "") {
//     const h2 = document.querySelector("h2");
//     if (!h2) {
//       const h2El = document.createElement("h2");
//       h2El.textContent = "Поле пустое";
//       input.style.border = "4px solid red";
//       input.after(h2El);
//     }
//   } else {
//     input.style.border = "1px solid black";
//   }
// });

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
let h2El;

btnEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputEl.value.trim() === "") {
    if (!h2El) {
      h2El = document.createElement("h2");
      h2El.textContent = "не заполнили поле";
      inputEl.after(h2El);
    }
    inputEl.style.border = "4px solid red";
  } else {
    if (h2El) {
      inputEl.style.border = "1px solid black";
      h2El.remove();
      h2El = null;
    }
    formEl.submit();
    console.log("форма отправлена");
    formEl.reset();
  }
});

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .input-error {
            border: 4px solid red;
        }
        .error-message {
            color: red;
        }
    </style>
</head>
<body>
    <form action="">
        <input type="text">
        <button type="submit" class="btn">Отправить</button>
    </form>
    <script>
        const input = document.querySelector("input");
        const form = document.querySelector("form");

        form.addEventListener("submit", (e) => {
            const h2 = document.querySelector("h2");
            if (input.value.trim() === "") {
                e.preventDefault();
                if (!h2) {
                    const h2El = document.createElement("h2");
                    h2El.textContent = "Поле пустое";
                    h2El.classList.add("error-message");
                    input.classList.add("input-error");
                    input.after(h2El);
                }
            } else {
                if (h2) {
                    h2.remove();
                }
                input.classList.remove("input-error");
            }
        });
    </script>
</body>
</html>*/
