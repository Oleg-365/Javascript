/*Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

// const numberCube = (number) => number ** 3;
// console.log(numberCube(2) + numberCube(3));

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

// const check = (input) => {
//   if (isNaN(input)) {
//     console.log(`${input} не число.`);
//   } else {
//     console.log(`${input} число.`);
//     return input;
//   }
// };

// function thirteenPercent(salary) {
//   let percent = salary - salary * 0.13;
//   console.log(`Размер заработной платы за вычетом налогов равен ${percent}.`);
// }

// let inputSalary = prompt("Введите вашу зароботную плату.");
// thirteenPercent(check(inputSalary));

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

// const maxNumber = (a, b, c) => Math.max(a, b, c);

// let num1 = Number(prompt("Введите первое число."));
// console.log(`Вы ввели первое число ${num1}.`);

// let num2 = Number(prompt("Введите второе число."));
// console.log(`Вы ввели второе число ${num2}.`);

// let num3 = Number(prompt("Введите третье число."));
// console.log(`Вы ввели третье число ${num3}.`);

// console.log(`Максимальное число: ${maxNumber(num1, num2, num3)}.`);

/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

const sum = (num1, num2) => num1 + num2;

const difference = (num1, num2) => {
  if (num1 === num2) return 0;
  return num1 > num2 ? num1 - num2 : num2 - num1;
};
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

let num1 = Number(prompt("Введите первое число."));
console.log(`Вы ввели первое число ${num1}.`);

let num2 = Number(prompt("Введите второе число."));
console.log(`Вы ввели второе число ${num2}.`);

console.log(sum(num1, num2));
console.log(difference(num1, num2));
console.log(difference(num1, num2));
console.log(multiplication(num1, num2));
console.log(division(num1, num2));

// console.log(sum(3, 8));
// console.log(difference(3, 8));
// console.log(difference(8, 3));
// console.log(multiplication(3, 8));
// console.log(division(10, 5));
