/*Задание 1
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.*/

//1

// function helloUser() {
//   console.log(`Привет ${userName} ${userFirstName}, с возрастом ${userAge}.`);
// }

// const userName = prompt('Введите имя.');
// const userLastName = prompt('Введите фамилию.');
// let userAge = Number(prompt('Введите возраст.'));
// helloUser(userName, userLastName, userAge);

//2

// function squareNumber () {
//   let result = num ** 2;
//   console.log(`Квадрат числа ${num} равно ${result}.`);
// }
// let num = Number(prompt('Введите число.'));
// squareNumber(num);

//3
// let num = Number(prompt('Введите число.'));
// function checkNumber () {
//   if (num >= 0) {
//     console.log('+++');
//   } else {
//     console.log('---');
//   }
// }
// checkNumber (num);

//или
// const checkNumber = (num) => (num >= 0) ? '+++' : '---';
// console.log(checkNum(-2));
// console.log(checkNum(9));

//Вариант №2
/*function helloMan(firstName, lastName, age) {
  console.log(`Привет, ${firstName} ${lastName}, c возрастом ${age}!`);
}

let firstName = prompt('Введите ваше имя');
let lastName = prompt('Введите вашу фамилию');
let age = prompt('Введите ваш возраст');
helloMan(firstName, lastName, age);

const power = (num) => num ** 2;
console.log(power(5));

const checkNum = (number) => (number >= 0) ? '+++' : '---';
  
console.log(checkNum(-2));
console.log(checkNum(9));*/
//---------------------------------------------------

/*Задание 2
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();*/

//1
// let num1 = Number(prompt('Введите первое число.'));
// let num2 = Number(prompt('Введите второе число.'));
// let num3 = Number(prompt('Введите третье число.'));
// function sum () {
//   let result = num1 + num2 + num3;
//   console.log(`Сумма чисел равна ${result}`);
// }
// sum(num1, num2, num3);

//2
// let param1 = '1';
// let param2 = 2;
// let param3 = 3;

// function sum () {
//   let result = param1 + param2 + param3;
//   console.log(`Сумма чисел равна ${result}`);
// }
// sum(param1, param2, param3);

//3
//function func(num = 5) {
//  console.log(num * num);
//  }
//func(2);   // выдаст 4
//func(3);  // выдаст 9
//func(); //выдаст 25

//Вариант 2
// Задание 2 (тайминг 15 минут)
//   // 1. Сделайте функцию, которая параметрами принимает 3 числа и
//   // выводит в консоль сумму этих чисел.

//   function summThreeNums(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(summThreeNums(100, 200, 300));

// const summofThreeNums = (num1, num2, num3) => +num1 + +num2 + +num3;
// console.log(summofThreeNums(20, 20, 40));

// // 2. С помощью созданной вами функции выведите в консоль сумму
// // значений этих переменных.
// let param1 = '1';
// let param2 = 2;
// let param3 = 3;
// console.log(summofThreeNums(param1, param2, param3));

// // 1. Дана фукнция
// function func(num = 5) {
//     console.log(num * num);
// }
// // Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();
//----------------------------------------------------

/*Задание 3
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции*/

//1.1--------------------------
// let squareRoot = (num) => {
//   return Math.sqrt(num);
// };

// let num1 = Number(prompt("Введите первое число."));
// console.log(`Вы ввели первое число ${num1}.`);
// const param1 = squareRoot(num1);
// console.log(`Квадратный корень равен ${param1} из числа ${num1}.`);

//1.2-----------------
// let squareRoot = (num) => {
//   return Math.sqrt(num);
// };

// let sumSquareRoot = (param1, param2) => {
//   return (sum = param1 + param2);
// };

// let num1 = Number(prompt("Введите первое число."));
// console.log(`Вы ввели первое число ${num1}.`);
// const param1 = squareRoot(num1);
// console.log(`Квадратный корень равен ${param1} из числа ${num1}.`);
// let num2 = Number(prompt("Введите второе число."));
// console.log(`Вы ввели второе число ${num2}.`);
// const param2 = squareRoot(num2);
// console.log(`Квадратный корень равен ${param2} из числа ${num2}.`);
// sumSquareRoot(param1, param2);
// console.log(`Сумма корней равна ${sum}.`);

//1.3--------------------
// let minNumber = (num1, num2) => {
//   if (num1 === num2) {
//     console.log("Числа равны.");
//     return;
//   } else if (num1 > num2) {
//     return num2;
//   } else {
//     return num1;
//   }
// };
// let num1 = Number(prompt("Введите первое число."));
// console.log(`Вы ввели первое число ${num1}.`);
// let num2 = Number(prompt("Введите второе число."));
// console.log(`Вы ввели второе число ${num2}.`);
// console.log(`Минимальное число: ${minNumber(num1, num2)}`);

// const minNumber = (num1, num2) =>  num1 < num2 ? num1 : num2;

// let num1 = Number(prompt("Введите первое число."));
// console.log(`Вы ввели первое число ${num1}.`);
// let num2 = Number(prompt("Введите второе число."));
// console.log(`Вы ввели второе число ${num2}.`);
// console.log(`Минимальное число: ${minNumber(num1, num2)}`);
//Вариант 2
// const sqrt = (num) => Math.sqrt(num)

// const root3 = sqrt(3)
// console.log(root3)
// const root4 = sqrt(4)
// console.log(root4)

// const sum = (a, b) => a + b
// console.log(sum(root3, root4))

// const sumOfSquareRoots = (num1, num2) => {
//   const sqrt = (num) => Math.sqrt(num)

//   const root1 = sqrt(num1)
//   const root2 = sqrt(num2)
//   const sum = root1 + root2

//   console.log(`Квадратный корень из ${num1} равен: ${root1}`)
//   console.log(`Квадратный корень из ${num2} равен: ${root2}`)
//   console.log(`Сумма квадратных корней из ${num1} и ${num2} равна: ${sum}`)
// }

// sumOfSquareRoots(3, 4);

// const minNum = (a, b) => a < b ? a : b
// console.log(minNum(1, 2))

// function minNum (a, b) {

//   if (a < b) {
//     console.log(a)
//   } else {
//     console.log(b)
//   }
// }

// minNum(2, 3)
//-------------------------------------------------------------------------

/*Задание 4 
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)*/

//1
// let day = Number(prompt("Введите число от 1 до 7."));
// const dayWeek = () => {
//   message =
//     day === 1
//       ? "День недели понедельник."
//       : day === 2
//       ? "День недели вторник."
//       : day === 3
//       ? "День недели среда."
//       : day === 4
//       ? "День недели четверг."
//       : day === 5
//       ? "День недели пятница."
//       : day === 6
//       ? "День недели суббота."
//       : day === 7
//       ? "День недели воскресение."
//       : "Вы ввели некорректное число.";
// };

// dayWeek(day);
// console.log(message);
//2

// const salutation = (userName, time) => {

//   if (time > 6 && time < 12) console.log(`Доброе утро ${userName}, время ${time} часа.`);
//   if (time > 11 && time < 19) console.log(`Добрый день ${userName}, время ${time} часа.`);
//   if (time > 18 && time < 24) console.log(`Добрый вечер ${userName}, время ${time} часа.`);
//   if (time > 23 && time < 7) console.log(`Доброй ночи ${userName}, время ${time} часа.`);
//   if (time > 25) console.log(`Ошибка!`);
// };

// const userName = prompt("Введите Имя.");
// let time = new Date().getHours();
// salutation(userName, time);

//Вариант 2

// function getDayOfWeek(number) {
//   switch (number) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресенье";
//     default:
//       return "Некорректное значение";
//   }
// }

// let day = +prompt('Введите любое число от 1 до 7');
// console.log("День недели: ", getDayOfWeek(day));

// function greetUser(name, time) {
//   let greeting;

//   if (time >= 0 && time < 6) {
//     greeting = "Доброй ночи, " + name;
//   } else if (time >= 6 && time < 12) {
//     greeting = "Доброе утро, " + name;
//   } else if (time >= 12 && time < 18) {
//     greeting = "Добрый день, " + name;
//   } else {
//     greeting = "Добрый вечер, " + name;
//   }

//   return greeting;
// }

// let userName = prompt('Введите ваше имя');
// // let currentTime = +prompt('Который час?');
// const currentTime = new Date().getHours();

// const greetingMessage = greetUser(userName, currentTime);
// console.log(greetingMessage);

//Задание 5
// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// Добавить подсказку, если пользователь ответил неверно.

// function goRiddle() {
//   function riddles(question, answer) {
//     let userAnswer = prompt(question);
//     userAnswer = userAnswer.toLocaleLowerCase();
//     if (userAnswer === answer) {
//       console.log("true");
//     } else {
//       console.log("false");
//       console.log("Подсказка: его открывают ключом.");
//     }
//   }
//   riddles("Не лает, не кусает, а в дом не пускает", "замок");
// }
// goRiddle();
// //-------------------------
// const puzzles = (quiz, answer) => {
//   const userAnswer = prompt(quiz);

//   if (userAnswer === answer) {
//     return true;
//   } else {
//     const last = answer[answer.length - 1];
//     const first = answer[0];
//     console.log(
//       `Не правильный ответ. Начинается на ${first}, а заканичвается на ${last}`
//     );
//   }
// };

// const quiz = "Что имеет голову, но не имеет тела?";
// const answer = "гвоздь";

// const correct = puzzles(quiz, answer);
// console.log(`Ответ правильный: ${correct}`);
// const quessing = (question, answer) => {
//   const flag = false;
//   let count = 0;
//   while (flag === false && count < answer.length) {
//     let result = prompt(question);
//     if (result === answer) {
//       flag === true;
//       console.log("OK");
//       return;
//     } else {
//       result = prompt(`Неверно, ${count + 1} буква - ${answer[count]}`);
//       count++;
//     }
//   }
// };

// quessing("Зимой и летом", "елка");
// //--------------------------------
// const quessing = (question, answer) => {
//   const flag = false;
//   let count = 0;
//   while (flag === false && count < answer.length) {
//     let result = prompt(question);
//     if (result === answer) {
//       flag === true;
//       console.log("OK");
//       return;
//     } else {
//       result = prompt(`Неверно, ${count + 1} буква - ${answer[count]}`);
//       count++;
//     }
//   }
// };

// quessing("Зимой и летом", "елка");
// //------------------------------
// unction riddles(textRiddles, hint, response){
//   let ridd = prompt(textRiddles).toLowerCase();
//   if (ridd === response){
//       console.log('Угадал');
//   }else{
//       ridd = prompt(hint);
//       if (ridd === response){
//           console.log('Угадал');
//       }else{
//           console.log('неправильно');
//       }
//   }
// }

riddles("зимой и летом одним цветом", "зеленая", "елка");
