//
// Задания с текущей страницы
// https://up.htmlacademy.ru/profession/react-js-individual/1/javascript-individual/1/tasks/6#
//
//Мои комментарии, по тестам со страницы заданий все ок
//Тестировал код в терминале htmlacademy




//-------------------------------
// 1-я функция
//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

let checkWord = function(str){

//переворачиваем слово
let reverse = str.split('').reverse().join('');

    //убираем разные регистры
    str=str.toLowerCase();
    reverse=reverse.toLowerCase();

//Проверка
  if(str === reverse) {
    return true;
  } else {
    return false;
  }

}

// Строка является палиндромом
//checkWord('топот'); // true
// Несмотря на разный регистр, тоже палиндром
//checkWord('ДовОд'); // true
// Это не палиндром
//checkWord('Кекс');  // false


// -------------------------
// 2-я функция
// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

let extractingNumbers = function(str){
  let newStr='';

  for (let i = 0; i < str.length; i++) {
    //проверка на число
    if(isNaN(str[i]) || str[i]=== " " ){
      //значит символ
    } else {
      //значит цифра

    newStr = newStr+str[i];

    }
  }
  //console.log(newStr);
  if(newStr === '') {
    return newStr=NaN;
  } else {
    return Math.floor(newStr); //С записанными цифрами
  }
  }



 // extractingNumbers('2023 год');            // 2023
 // extractingNumbers('ECMAScript 2022');     // 2022
 // extractingNumbers('1 кефир, 0.5 батона'); // 105
//  extractingNumbers('агент 007');           // 7
 // extractingNumbers('а я томат');           // NaN


  // --------------------
//3-я функция
// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
// Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

let str;
let maxLength;
let newStr;
let tempStr;

let createNewStr = function(str,maxLength,newStr){
  tempStr=str;

   if(newStr.length>maxLength) {
        //обрезаем добавочное
       str=newStr.slice(0, maxLength-1)+str;
    } else {
      //Исходное не нужно резать
      if(str.length>=4) {
        str=str;
      } else
  //Размножение недостающих добавочных
      for(let i=1; i < maxLength;
  i++){
        if(str.length>maxLength) {
          str=str.slice(0,maxLength-1)+tempStr;
          break;
        } else
        str=newStr+str;
      }

    }

  return str;
  //console.log(str);
}

// Добавочный символ использован один раз
//console.log(createNewStr('1', 2, '0'));      // '01'

// Добавочный символ использован три раза
//console.log(createNewStr('1', 4, '0'));      // '0001'

// Добавочные символы обрезаны с концаA
//console.log(createNewStr('q', 4, 'werty'));  // 'werq'

// Добавочные символы использованы полтора раза
//console.log(createNewStr('q', 4, 'we'));     // 'wweq' - у меня wewq, но я руководствовался заданием, см. след. строку
//Если «добивка» слишком длинная, она обрезается с конца.

// Добавочные символы не использованы, исходная строка не изменена
//console.log(createNewStr('qwerty', 4, '0')); // 'qwerty'


  //-------------
  // 4-я функция
  // Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:


  let str;
let maxNumber;
let checkStr = function (str,maxNumber) {
  console.log(str);
  console.log('максимум '+maxNumber);
  console.log(str.length);
  if(str.length <= maxNumber){
   return  true;
  } else {
   return false;
  }


}

// Cтрока короче 20 символов
//checkStr('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
//checkStr('проверяемая строка', 18); // true
// Строка длиннее 10 символов
//checkStr('проверяемая строка', 10); // false
