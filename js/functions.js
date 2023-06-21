/* Задача №1:
Написать функцию для проверки длины строки.

Требования к реализации:
1. Функция принимает строку, которую нужно проверить, и максимальную длину и возвращает true
 если строка меньше или равна указанной длине.
2. Возвращает false, если строка длиннее.
 */

const checksStringLength = (string, length) => string.length <= length;

checksStringLength('Ключ', 3); // Ожидаем: false
checksStringLength('Ключ', 7); // Ожидаем: true


/* Задача №2
  Написать функцию для проверки, является ли строка палиндромом.

  Требования к реализации:
1. Функция 1 параметр: строку, которую нужно проверить
2. Возвращает true, если строка палиндром.
*/

const reverseString = (modifiedString) => {
  let reversedString = '';

  for (let i = 1; i <= modifiedString.length; i++) {
    reversedString += modifiedString.at(-i);
  }

  return reversedString;
};

const isPalindrom = (string) => {
  const modifiedString = string.toUpperCase().replaceAll(' ', '');

  if (modifiedString === reverseString(modifiedString)) {
    return true;
  }

  return false;
};


isPalindrom('Всем привет'); //Ожидаем: false
isPalindrom('Лёша на пОлке клопа нашёл '); // Ожидаем: true
isPalindrom('А роза упала на лапу Азора'); // Ожидаем: true


/* Задача №3
 Написать функцию которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. */

const extractsNumbers = (string) => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += parseInt(string[i], 10);
    }
  }
  result = (!Number.isNaN(parseInt(result, 10))) ? parseInt(result, 10) : NaN;

  return result;
};

extractsNumbers('лето2023'); // Ожидаем: 2023
extractsNumbers('лето'); // Ожидаем: NaN
extractsNumbers('1 кефир, 0.5 батона'); // Ожидаем: 105
extractsNumbers('а я томат'); // Ожидаем: NaN
extractsNumbers('агент 007'); // Ожидаем: 7
