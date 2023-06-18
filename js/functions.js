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

console.log(checksStringLength('Ключ', 3));


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

console.log(isPalindrom('Всем привет'));
console.log(isPalindrom('Лёша на пОлке клопа нашёл '));
console.log(isPalindrom('А роза упала на лапу Азора'));


