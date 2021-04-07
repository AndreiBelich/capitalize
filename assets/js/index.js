"use strict";

/**
 * Возвращает новую строку где первый символ каждого слова начинается с заглавной буквы
 * @param {string} str 
 * @returns string
 */
function capitalize(str){
  return str.split(" ")
            .map((item) => item[0].toUpperCase() + item.slice(1))
            .join(" ");
}

const sentences = [
  "some string I need",
  "to be or not to be",
  "it's string not a number",
  "hello dear friend",
  "it's strange message",
  "1st place in the world"
];

sentences.forEach((item) => console.log(capitalize(item)));