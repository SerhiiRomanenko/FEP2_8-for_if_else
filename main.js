//   Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)

for (let i = 20; i <= 30; i = i + 0.5) {
  console.log(i);
}

// я не зрозумів що значить що таке через пропуск тому ось другий варіант цієї задачі

let result = "";

for (let i = 20; i <= 30; i = i + 0.5) {
  result = result + i + ' ';
}

console.log(result);



//   Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let dollatInUAH = 40;

for (let i = 10; i <= 100; i = i + 10) {
  console.log(`${i} Dollars costs ${dollatInUAH * i} UA Hryvnias`);
}


//   Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let n = 149;

for (let i = 1; i <= 100; i++) {
  if (i ** 2 <= n) {        // or i * i
    console.log(i);
  }
}



//   Дано ціле число. З'ясувати, чи воно простим
//   (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).


let someNumber = 11;
let flag = true;

for (let i = 2; i < someNumber; i++) {
  if (someNumber % i === 0) {
    flag = false;
    break;
  }
}

console.log(`${someNumber} ${flag ? "" : "НЕ"} є простим числом`);


// Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3
// деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let randomNumber = 81;
let flag2 = false;
for (let i = 2; i < someNumber; i++) {
  if (i * i === randomNumber) {
    flag2 = true;
    break;
  }
}

console.log(`Число ${randomNumber} ${flag2 ? "" : "НЕ"} можна одержати шляхом зведення в ступінь інших чисел`);