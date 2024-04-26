//Задание 1
// Установить расширение “JavaScript Snippet Pack”
// Сделайте файл с вашей первой программой. 
// index.html
// script.js
// Подключите файл script.js к index.html
// В файле index.html создайте скрипт который выводит в консоль текст “Текст из index.html”
// В файле script.js вывести в консоль текст “Текст из script.js!”

console.log("Текст из script.js!");

/*Задание 2

Создайте переменную num и присвойте ей значение 123. Выведите значение этой переменной в консоль
Создайте переменную а и присвойте ей значение 5, переопределите переменную а на значение 7, выведите переменную а в консоль
Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции console.log выведите в консоль содержимое переменной b.
Создайте 2 вида комментариев в вашем коде, добавьте в них произвольный текст*/

let number = 123;
let a = 5;
a = 7;
console.log(a);

let b = 1+2+3;
console.log(b);

// Задание 3
// Создайте переменную c со значением 10 и переменную d со значением 2. 
// Все созданные переменные должны быть логично названы
// Создайте переменную суммы и присвойте сумму чисел (c,d)
// Создайте переменную разности и присвойте разность чисел (c,d)
// Создайте переменную произведения и присвойте произведение чисел (c,d)
// Создайте переменную частного и присвойте деление чисел (c,d)
// Выведите в консоль все созданные переменные
// Сложите все созданные переменные и выведите результат в консоль

const numberC = 10;
const numberD = 2;
const sum = numberC + numberD;
console.log(sum);

const difference = numberC - numberD;
console.log(difference);

const composition = numberC * numberD;
console.log(composition);

const division = numberC / numberD;
console.log(division);

const result = sum + difference + composition + division;
console.log(result);

// Задание 4

// Не запуская код, определите, что выведется в консоль: 
// let a = 5 + 5 * 3 + 3;
// Не запуская код, определите, что выведется в консоль:
// let a = 8 / 2 + 2;
// Не запуская код, определите, что выведется в консоль:
// let a = (2 + 3) * (2 + 3);
// Не запуская код, определите, что выведется в консоль:
// let a = (2 + 3) * 2 + 3;
// Не запуская код, определите, что выведется в консоль:
// let a = (2 * 8) / 4;
// Не запуская код, определите, что выведется в консоль:
// let a = 2 * (8 / 4);

let a1 = 5 + 5 * 3 + 3;
console.log(a1);
let a2 = 8 / 2 + 2;
console.log(a2);
let a3 = (2 + 3) * (2 + 3);
console.log(a3);
let a4 = (2 + 3) * 2 + 3;
console.log(a4);
let a5 = (2 * 8) / 4;
console.log(a5);
let a6 = 2 * (8 / 4);
console.log(a5);

// Задание 5
// Запишите в переменную a число 1.5, а в переменную b число 0.75. Найдите сумму значений этих переменных и выведите ее на экран.
// Создайте переменную c, запишите в нее какое-нибудь положительное или отрицательное число. Выведите в консоль это число с обратным знаком.


const numA = 1.5;
const numB = 0.75;
console.log(numA + numB);

const numC = -1;
console.log(Math.abs(numC));


//Задание 6
// Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль
// Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции сложения строк выведите в консоль строку 'javascript'.
// Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции сложения строк выведите в консоль строку 'hello world'.


const fistname = 'Oleg';
const lastname = 'Popov';
console.log(`${fistname} ${lastname}`);
console.log(fistname, lastname);

const text1 = 'java';
const text2 = 'script';
console.log(`${text1} ${text2}`);
console.log(text1, text2);

const text3 = 'hello';
const text4 = 'world';
console.log(`${text3} ${text4}`);
console.log(text3, text4);

// const firstName = "Николай";
// const lastName = "Гаврилов";
// console.log(`${firstName} ${lastName}`);

// const java = 'java';
// const script = 'script';
// console.log(java + script);

// const hello = "hello";
// const world = "world";
// console.log(hello, world);

