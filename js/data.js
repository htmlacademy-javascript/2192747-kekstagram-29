import {
  getRandomArrayElement,
  getRandomInteger
} from './util.js';

const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 30;
const DESCRIPTION_ARRAY_LENGTH = 25;

const PHOTO_DESCRIPTION = [
  'Красиво',
  'Кул',
  'Пушка',
  'Бомба',
  'Обворожительно',
  'Не оч'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше'
];

const NAME = [
  'Коля',
  'Вася',
  'Петя',
  'Маша',
  'Даша',
  'Саша',
  'Лина',
  'Вика',
  'Мила',
];

const generateIds = (arrayLength) => {
  const ID = [];
  while (ID.length !== arrayLength) {
    const generatedItems = [];
    generatedItems.push(getRandomInteger(1, arrayLength));
    const itemCheck = (item) => {
      if (ID.indexOf(item) === -1) {
        ID.push(item);
        return true;
      }
      return false;
    };
    generatedItems.filter((item) => itemCheck(item));
  }
  return ID;
};

const createMessage = () => Array.from({
  length: getRandomInteger(1, 3)
}, () => getRandomArrayElement(MESSAGE)).join('');

const makeComment = (commentId) => ({
  id: commentId,
  avatar: `img/${ commentId }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME, NAME.length - 1),
});

const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${ id }.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION, PHOTO_DESCRIPTION.length - 1),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comment: (function () {
    const uniqueCommentId = generateIds(COMMENTS_MAX_COUNT);
    return uniqueCommentId.map((commentId) => makeComment(commentId));
  })()
});

const generateDescriptionArray = () => {
  const uniqueId = generateIds(DESCRIPTION_ARRAY_LENGTH);
  return uniqueId.map((id) => createPhotoDescription(id));
};

export {
  generateDescriptionArray
};
