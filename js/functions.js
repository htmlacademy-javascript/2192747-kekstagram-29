/* Задача №1:
Написать функцию для проверки длины строки.

Требования к реализации:
1. Функция принимает строку, которую нужно проверить, и максимальную длину и возвращает true
 если строка меньше или равна указанной длине.
2. Возвращает false, если строка длиннее.
 */

const checksStringLength = (string, length) => {
  if (string.length <= length) {
    return true;
  }

  return false;
};

console.log(checksStringLength('Ключ', 3)); // Ожидаем: false
console.log(checksStringLength('Ключ', 7)); // Ожидаем: true


/* Задача №2
  Написать функцию для проверки, является ли строка палиндромом.

  Требования к реализации:
1. Функция 1 параметр: строку, которую нужно проверить
2. Возвращает true, если строка палиндром.
*/

function reverseString(string) {
  let reversedString = '';

  for (let i = 1; i <= string.length; i++) {
    reversedString += string.at(-i);
  }

  const reversedModifiedString = reversedString.toUpperCase().replaceAll(' ', '');

  return reversedModifiedString;
}

const isPalindrom = (string) => {
  const modifiedString = string.toUpperCase().replaceAll(' ', '');
  if (modifiedString === reverseString(string)) {
    return true;
  }

  return false;
};

console.log(isPalindrom('Всем привет')); //Ожидаем: false
console.log(isPalindrom('Лёша на пОлке клопа нашёл ')); // Ожидаем: true
console.log(isPalindrom('А роза упала на лапу Азора')); // Ожидаем: true


/* Задача №3
 Написать функцию которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. */

const extractsNumbers = (string) => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += parseInt(string[i], 10);
    }
  }
  /*  Хочу уточнить нужен ли тут тернарный оператор
  result = (!Number.isNaN(parseInt(result, 10))) ? result : NaN;
  return result */

  if (!Number.isNaN(parseInt(result, 10))) {
    return result;
  }

  return NaN;
};

console.log(extractsNumbers('лето2023')); // Ожидаем: 2023
console.log(extractsNumbers('лето')); // Ожидаем: NaN
console.log(extractsNumbers('1 кефир, 0.5 батона')); // Ожидаем: 105
console.log(extractsNumbers('а я томат')); // Ожидаем: NaN
