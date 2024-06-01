/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Homework 5</title>
</head>

<body>


Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script> 
"use strict";*/

//1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// let dropdownItemEl = document.querySelectorAll(".dropdown-item");
// dropdownItemEl.forEach((item) => item.classList.add("super-dropdown"));
// console.log(dropdownItemEl);

//--------------------------------------------------------------------
//2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const btn = document.querySelector(".btn");
// console.log(btn);
// if (btn.classList.contains("btn-secondary")) {
//   btn.classList.remove("btn-secondary");
// } else {
//   btn.classList.add("btn-secondary");
// }
// console.log(btn);

//или

//document.querySelector('.btn').classList.toggle('btn-secondary');

//--------------------------------------------------------------------
//3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const menuEl = document.querySelector(".menu");
// menuEl.classList.remove(".dropdown-menu");

//или

// const menuElem = document.querySelector(".menu");
// console.log(menuElem);
// if (menuElem.classList.contains("dropdown-menu")) {
//   menuElem.classList.remove("dropdown-menu");
// }
// console.log(menuElem);

//------------------------------------------------------------------------
//4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`;

// const dropdownDiv = document.querySelector("div.dropdown");
// console.log(dropdownDiv);
// dropdownDiv.insertAdjacentHTML("afterend", '<a href="#">link</a>');
// console.log(dropdownDiv);

//-------------------------------------------------------------------------
//5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// const dropdownMenuButton = document.querySelector("#dropdownMenuButton");
// console.log(dropdownMenuButton);
// dropdownMenuButton.setAttribute("id", "superDropdown");
// console.log(dropdownMenuButton);

//------------------------------------------------------------------------
//6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// const dataDd = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// dataDd.dataset.dd = "3";
// console.log(dataDd);

//--------------------------------------------------------------
//7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// const dropdownToggle = document.querySelector(".dropdown-toggle");
// dropdownToggle.removeAttribute("type");
// console.log(dropdownToggle);
