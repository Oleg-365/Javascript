/*Задание 1
Текст задания
1. Создать новый файл lesson2.html
2. Создать переменную и спросить у пользователя “Ваш возраст”
3. Вывести на экран текст. Вам “возраст пользователя” лет
4. Спросить у пользователя его имя
5. Вывести на экран, Добро пожаловать на сайт “Имя пользователя”*/

// let age = prompt("Ваш возраст?");
// alert(`Вам ${age} лет.`);
// const userName = prompt("Как вас зовут?");
// alert(`Добро пожаловать ${userName}!`);

/*Задание 2 
Текст задания
1. Найти остаток от деления двух переменных
a. let a = 13;
b. let b = 5;
2. Что выведет на экран (Сначала проговорите, потом проверьте)
a. let a;
b. alert(a);
3. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('abc' * 3);
4. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert( 1 / 0);
b. alert(-1 / 0);
5. Что выведет на экран (Сначала проговорите, потом проверьте)
a. alert('2' * '3');*/

//1
// let a = 13;
// let b = 5;
// let result = a % b;
// console.log(result);

//2
// let a;
// alert(a); //выводит undefined

//3
//alert('abc' * 3); //выводит NaN

//4
//alert( 1 / 0); //выводит Infinity
//alert(-1 / 0); //выводит -Infinity

//5
//alert("2" * "3"); // выводит 6

/*Задание 3 (тайминг 15 минут)
1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных переменных
a. let a = '2';
b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
a. Сумма чисел равна “результат”
b. Разность чисел равна “результат”
c. Произведение чисел равно “результат”
d. Частное чисел равно “результат”
e. Остаток от деления чисел равен “результат”*/

// let a = '2';
// let b = '3';
// let result1 = a + b;
// console.log(`Сумма чисел равна ${result1}`);
// let result2 = a - b;
// console.log(`Разность чисел равна ${result2}`);
// let result3 = a * b;
// console.log(`Произведение чисел равно ${result3}`);
// let result4 = a / b;
// console.log(`Частное чисел равно ${result4}`);
// let result5 = a % b;
// console.log(`Остаток от деления чисел равен ${result5}`);

/*Задание 4
1. Не запуская код, определите, что выведется в консоль:
a. console.log(String(true));
2. Не запуская код, определите, что выведется в консоль:
a. console.log('a' + true);
3. Не запуская код, определите, что выведется в консоль:
a. console.log(Number(true));
4. Не запуская код, определите, что выведется в консоль:
a. console.log(true + 1);
5. Не запуская код, определите, что выведется в консоль:
a. console.log(true + true)
6. Не запуская код, определите, что выведется в консоль:
a. console.log(true - true)
7. Не запуская код, определите, что выведется в консоль:
a. console.log( String(true) + Number(true) )*/

// console.log(String(true)); //true
// console.log("a" + true); //atrue
// console.log(Number(true)); //1
// console.log(true + 1); //2
// console.log(true + true); //2
// console.log(true - true); //0
// console.log(String(true) + Number(true)); //true1

/*Задание 5
1. Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который
a. Выводит в консоль “Число больше 5”
b. Выводит в консоль “Число меньше 5”
c. Выводит в консоль “Число равно 5”
2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
выведите соответствующее сообщение.
3. Пользовать с клавиатуры вводит 2 числа
a. Необходимо найти какое из двух чисел минимальное
4. Пользователь с клавиатуры вводит число, Проверьте, что данная
переменная больше нуля и меньше 15.*/

// let number = prompt('Введите число:');
// if (+number === 5) {
//   console.log('Число равно 5.');
// } else if (+number > 5) {
//   console.log('Число больше 5.');
// } else {
//   console.log('Число меньше 5.');
// }

//Или
let number = prompt("Введите число:");
let message =
  +number === 5
    ? "Число равно 5."
    : +number > 5
    ? "Число больше 5"
    : +number < 5
    ? "Число меньше 5"
    : "Введите число!";
console.log(message);