//-----util.js — модуль с вспомогательными функциями;

import {DESCRIPTION, NAMES, MESSAGE} from './data.js';


const randomNumber = (min, max) => {
  const random = Math.random() * (max - min) + min;
  return Number(random.toFixed(0)); //Возвращаем результат с 0 после запятой, чтобы было целое число
};

let maxId = 0;


const generateComments = (amount) => {
  const temp = [];

  for (let i = 0; i < amount; i++) {
    temp.push({

      id: maxId++,
      avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
      message: MESSAGE[randomNumber(0, MESSAGE.length - 1)],
      name: NAMES[randomNumber(0, NAMES.length - 1)]
    });

  }
  return temp;
};


const generatePhotos = () => {
  const temp = [];

  for (let i = 0; i < 25; i++) {
    temp.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTION[randomNumber(0,DESCRIPTION.length - 1)],
      likes: randomNumber(15, 200),
      comments: generateComments(randomNumber(1, 5))
    });

  }
  return temp;
};


export {randomNumber, generateComments, generatePhotos};


