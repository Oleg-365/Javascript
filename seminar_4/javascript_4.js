/*Задание 1 (тайминг 20 минут)
Текст задания
1. Создайте массив с элементами 1, 2, 3. Выведите на экран 
каждый из этих элементов.
2. Создайте массив с произвольными элементами. 
Выведите на экран количество элементов в этом 
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо 
первого элемента число 1, вместо второго - 2, вместо 
третьего - 3.*/

//(1)
// const array = [];
// array.push(1);
// array.push(2);
// array.push(3);
// console.log(array);
//-----------------------------
//(2)
// console.log(`Длина массива - ${array.length}`);
// //(3)
// for (let i = 0; i <= array.length; i++) {
//   const element = array[i];
//   array.pop();
//   array.shift();
// }
// array.push("a");
// array.push("b");
// array.push("c");
// console.log(array);
//-----------------------------
//или
// const array = [];
// array.push(1);
// array.push(2);
// array.push(3);
// console.log(array);
// array[0] = "a";
// array[1] = "b";
// array[2] = "c";
// console.log(array);
///-------------------------------------
//(3)
// const array = ['a', 'b', 'c'];
// console.log(array);

// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
//--------------------
//или

// const array = [];
// array.push("a");
// array.push("b");
// array.push("c");
// console.log(array);
// for (let i = 0; i <= array.length; i++) {
//   const element = array[i];
//   array.pop();
//   array.shift();
// }
// array.push(1);
// array.push(2);
// array.push(3);
// console.log(array);

/*Задание 2 (тайминг 15 минут)
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ 
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два 
элемента. Проверьте, какое станет значение свойства length после 
этого.*/
//-------------------
//(1)
// const arrayNumber = [];
// arrayNumber.push(1);
// arrayNumber.push(2);
// arrayNumber.push(3);
// const arrayNum = arrayNumber.slice();
// for (let i = 0; i <= arrayNum.length - 1; i++) {
//   const element = arrayNum[i];
//   arrayNum[i]++;
// }
// console.log(arrayNum);
//-----------------
//(2)
// const arr = [];
// arr[3] = "a";
// arr[8] = "b";
// console.log(arr);
// console.log(`Длина массива - ${arr.length}`);
//-----------------
//(3)
// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);
//------------------------
//(4)
// const array = [];
// array.push(Math.floor(Math.random() * 100));
// array.push(Math.floor(Math.random() * 100));
// array.push(Math.floor(Math.random() * 100));
// array.push(Math.floor(Math.random() * 100));
// array.push(Math.floor(Math.random() * 100));
// console.log(array);
// console.log(`Длина массива - ${array.length}`);
// const arrayNum = array.slice();
// arrayNum.pop();
// arrayNum.pop();
// console.log(arrayNum);
// console.log(`Длина массива - ${arrayNum.length}`);

/*Задание 3 (тайминг 25 минут)
1. С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в 
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3 
столько раз, пока результат умножения не станет больше 1000. 
Какое число получится? Посчитайте количество итераций, 
необходимых для этого.*/

//(1)
// for (let index = 11; index <= 33; index++) {
//   console.log(index);
// }

// //или

// const arrayNum = [];
// for (let i = 0; i <= 99; i++) {
//   arrayNum.push(i);
// }
// console.log(arrayNum);
// const arrayFilter = (arrayNum, min, max) =>
//   arrayNum.filter((num) => num >= min && num <= max);
// console.log(arrayFilter(arrayNum, 11, 33));
//-----------------------------------------------------
//(2)
// for (let index = 1; index < 101; index++) {
// if (index % 2 !== 0) {
// console.log(index);
// }
// }
//-----------------------
// или
//
// for (let index = 1; index < 101; index += 2) {
// console.log(index);
// }
//-----------------------
//или
//
// for (let index = 1; index <= 100; index++) {
//   if (index % 2 !== 0) {
//     console.log(index);
//   }
// }
// const arrayNum = [];
// for (let i = 0; i <= 99; i++) {
//   if (i % 2 !== 0) {
//     arrayNum.push(i);
//   }
// }
// console.log(arrayNum);
//--------------------------------
//(3)
// for (let index = 100; index > 0; index--) {
//   console.log(index);
// }
//------------------------
//или
// const arrayNum = [];
// for (let i = 100; i > 0; i--) {
//   arrayNum.push(i);
// }
// console.log(arrayNum);
//---------------------------------
//(4)
// const num = 105;
// let count = 0;

// for (let index = num; index <= 1000; index *= 3) {
//   console.log(index);
//   count++;
// }
// console.log(count);
//----------------------------------------------------
/*Задание 4 (тайминг 25 минут)
1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но 
меньше 10.
2. Найдите сумму четных чисел от 2 до 100.
3. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, 
который будет по очереди выводить элементы этого массива в 
консоль до тех пор, пока не встретится элемент со значением 0. 
После этого цикл должен завершить свою работу.*/
//(1)
// const arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }
//--------------------
//(2)
// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) sum += i;
//   console.log(sum);
// }
// console.log(sum);
//-----------------------
//(3)
// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   sum += arr[i];
//   console.log(sum);
// }
// console.log(`Сумма всех чисел массива: ${sum}`);
//-------------------------------------------
//(4)
// let line = "-";
// for (let i = 1; i < 10; i++) {
//   line = line + i + "-";
// }
// console.log(`Сформирована строка: ${line}`);

//(5)
// let array = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     break;
//   }
//   console.log(array[i]);
// }

/*Задание 5 (тайминг 25 минут)
1. Пусть у нас дан массив состоящий из 10 элементов с 
произвольными числами. Давайте переберем его циклом и числа, 
которые делятся на 2, возведем в квадрат и выведем в консоль, а 
числа, которые делятся на 3, возведем в куб и выведем в консоль.
2. С помощью двух вложенных циклов выведите на экран следующую 
строку:
Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Подсчитайте количество цифр 3 в этом массиве.
3. Дан следующий массив:
[1, 2, 3, 4, 5]
С помощью метода splice преобразуйте массив в следующий:
[1, 4, 5]*/

//(1)
const arrayNum = [];
for (let i = 0; i < 10; i++) {
  arrayNum.push(Math.floor(Math.random() * 10));
}
console.log(arrayNum);

for (let i = 0; i < arrayNum.length; i++) {
  const element = arrayNum[i];
  if (arrayNum[i] % 2 === 0) {
    square = arrayNum[i] ** 2;
    console.log(square);
  }
  if (arrayNum[i] % 3 === 0) {
    cube = arrayNum[i] ** 3;
    console.log(cube);
  }
}

//-----------------------------------------
//(2)
//const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   const element = arr[i];
//   if (arr[i] === 3) {
//     count++;
//   }
// }
// console.log(`Количество элементов равно ${count}.`);
//-------------------------------------------
//(3)
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let res = arr.splice(1, 2);
// console.log(arr);
