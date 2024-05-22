// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

//Решение

// function evenOddNumber(max) {
//   for (let i = 0; i < max; i++) {
//     if (i === 0) {
//       console.log(`${i} - "это ноль"!`);
//     } else if (i % 2 === 0) {
//       console.log(`${i} - чётное число!`);
//     } else {
//       console.log(`${i} - нечётное число!`);
//     }
//   }
// }

// let max = Number(prompt("Введите число"));
// evenOddNumber(max);

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

//Решение

// function deletingItems(array) {
//   let i = 3;
//   array.splice(i, 2);
//   console.log(array);
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
// deletingItems(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

/*Создаем мвссив*/
function array(min, max, length) {
  const arrayNum = [];
  for (let i = 0; i < length; i++) {
    arrayNum.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arrayNum;
}
/*Считаем сумму элементов массива*/
function sumElem(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/*Находим минимальный элемент массива*/
function minElem(arr) {
  const min = Math.min(...arr);
  return min;
}

/*Находим есть ли в этом массиве число 3*/
function numberThree(arr) {
  if (arr.indexOf(3) !== -1) {
    console.log(`В массиве есть число 3.`);
  } else {
    console.log(`В массиве нет числа 3.`);
  }
}

let min = 0;
let max = 9;
let length = 5;
const arr = array(min, max, length);
console.log(arr);
console.log(`Сумма массива = ${sumElem(arr)}.`);
console.log(`Минимальный элемент массива = ${minElem(arr)}.`);
numberThree(arr);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function lineX(min, length) {
  for (let i = min; i < length; i++) {
    let line = "";
    for (let j = min; j <= i; j++) {
      line += "x";
    }
    console.log(line);
  }
}

let minimum = 1;
let lengthLine = 21;
lineX(min, lengthLine);
