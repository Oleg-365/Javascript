// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const week = {
//   one: "Понедельник",
//   two: "Вторник",
//   three: "Среда",
//   four: "Четверг",
//   five: "Пятница",
//   six: "Суббота",
//   seven: "Воскресение",
// };
// console.log(week);
// console.log(week.two);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.

// const user = { name: "Ivan", surname: "Ivanov", age: 25 };
// console.log(`${user.name} - ${user.surname} - ${user.age}`);

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры

// user.patronymic = prompt("Введите отчество.");
// console.log(user);

// 4. Удалите свойство surname

// delete user.surname;
// console.log(user);

//Вариант 2
// const myObject = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Суббота",
//   7: "Воскресение",
// }

// console.log(myObject["2"]);

// const user = {
//   name: "Alexander",
//   surname: "Sergeev",
//   age: 35
// }

// const { name: userName, surname, age } = user;
// console.log("%s - %s - %s", userName, surname, age);

// user.patroname = prompt("Введите Ваше отчество");
// console.table(user);

// delete user.surname;
// console.table(user);
//---------------------------------------------------------------------------------

// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let week = {};
// if (arr1.length === arr2.length)
//   for (let i = 0; i < 7; i++) {
//     week[arr1[i]] = arr2[i];
//   }
// console.log(week);

// 1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

// const obj = { x: 1, y: 2, z: 3 };
// const object = Object.values(obj);
// console.log(object);
// const objectUp = object.map((item) => item ** 2);
// console.log(objectUp);

//Object.entries(obj).map(key => key, value => value ** 2);
// console.log(obj);
// for (const key in obj2) obj2[key] **= 2;
//---------------------------------------------------------------------------------
// Задание 3 (тайминг 15 минут)
// const obj = {
// key1: {
// key1: 1,
// key2: 2,
// key3: 3,
// },
// key2: {
// key1: 4,
// key2: 5,
// key3: 6,
// },
// key3: {
// key1: 7,
// key2: 8,
// key3: 9,
// },
// }
// Найдите сумму элементов приведенного объекта.

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// let sum = 0;
// for (key in obj) {
//   let subObj = obj[key];
//   for (key in subObj) {
//     let keySubObj = subObj[key];
//     for (key in keySubObj) {
//       let keyDeepObject = keySubObj[key];
//       sum += keyDeepObject;
//     }
//     if (parseInt(keySubObj)) {
//       sum += keySubObj;
//     }
//   }
// }
// console.log(sum);

//или
// console.log(
//   Object.values(obj).reduce(
//     (acc, el) => acc + Object.values(el).reduce((acc, el) => acc + el),
//     0
//   )
// );

// const sumValues = (object) => {
//   return Object.values(object).reduce((acc, value) => {
//     if (typeof value === "object") {
//       return acc + sumValues(value);
//     } else if (typeof value === "number") {
//       return acc + value;
//     } else {
//       return acc;
//     }
//   }, 0);
// };

// или
// const object = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// } // 45
// function ObjSum(obj) {
//   let sum = 0;
//   for (const key in obj) {
//     sum += (obj[key]);
//   }
//   return sum;
// }
// let allSum = 0;
// for (const key in object) {
//   let res = ObjSum(object[key]);
//   allSum += res;
// }
// console.log(allSum);
// function  ObjSum2(obj) {
//   let result = Object.values(obj).reduce((acc, element)=> {
//     return acc + element
//   },0);
//   return result;
// }

// let object1 = Object.values(object);
// let sum = object1.reduce((acc, element)=> {
//   return acc + ObjSum2(element)
// },0);
// console.log(sum);
//---------------------------------------------------------------------------------
// Задание 4 (тайминг 30 минут)

// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно
//--------------------------------------------------------------------------------

// const riddles = {
//   question: "Что можно увидеть с закрытыми глазами?",
//   answer: "Сон",
//   hints: ["Это происходит каждую ночь", "Обычно это приятное состояние"],

//   askQuestion() {
//     let userAnswer = prompt(this.question);

//     if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
//       console.log("Поздравляю, вы правильно ответили!");
//     } else {
//       console.log("Вы проиграли...");

//       let hintChoice = prompt("Хотите подсказку? (да/нет)");
//       if (hintChoice.toLowerCase() === "да") {
//         // let randomHintIndex = Math.floor(Math.random() * this.hints.length);
//           let randomHintIndex = this.hints.pop();
//         //   console.log("Подсказка: " + this.hints[randomHintIndex]);
//           console.log("Подсказка: " + randomHintIndex);
//       }
//     }
//   },
// };

// riddles.askQuestion();
// const riddles = {
//   question: "Зимой и летом одним цветом",
//   answer: "елка",
//   count: 0,
//   askQuestion: function(num) {
//       const result = prompt(this.question);
//       if (result === this.answer) {
//           console.log("Вы угадали");
//       } else if (this.count < num) {
//           console.log(`Первая буква - ${this.answer[this.count++]}`);
//           this.askQuestion();
//       } else {
//           console.log("Проиграли");
//       }
//   }
// }

// riddles.askQuestion(2);

//или
// const riddles = {
//   question: "Мягкие лапки, в лапках цапцарапки",
//   answer: "кошка",
//   assists: 0,
//   askQuestion: function () {
//       let userAnswer = prompt(this.question);
//       if (this.answer === userAnswer) {
//           console.log("Вы угадали");
//       } else {
//           if (this.assists === 0) {
//               this.assists += 1;
//               alert("Это животное");
//               riddles.askQuestion();
//           } else if (this.assists === 1) {
//               this.assists += 1;
//               alert("Это домашнее животное, мимимишное");
//               riddles.askQuestion();
//           }
//           else {
//               console.log("Вы проиграли");
//           }
//       }
//   }
// };

// console.log(riddles.askQuestion())
