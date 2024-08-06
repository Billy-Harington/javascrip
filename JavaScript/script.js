
let inputString = prompt("Введите целое число:");
let inputNumber = parseInt(inputString);
console.log("Преобразованное целое число:", inputNumber);


let floatString = prompt("Введите число с плавающей запятой:");
let floatNumber = parseFloat(floatString);
console.log("Преобразованное число с плавающей запятой:", floatNumber);


let numbersString = prompt("Введите три числа через пробел:");
let numbersArray = numbersString.split(' ').map(Number);
console.log("Введите три числа через пробел", numbersArray );



let sum = numbersArray.reduce((a, b) => a + b, 0);
let max = Math.max(...numbersArray);
let min = Math.min(...numbersArray);

console.log("Сумма:", sum);
console.log("Максимальное значение:", max);
console.log("Минимальное значение:", min);