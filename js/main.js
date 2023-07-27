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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () => Array.from({
  length: getRandomInteger(1, 3)
}, () => getRandomArrayElement(MESSAGE), ).join('');

const makeComment = (commentIndex) => ({
  id: commentIndex,
  avatar: `img/${ commentIndex }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME, NAME.length - 1),
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTION, PHOTO_DESCRIPTION.length - 1),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({
    length: COMMENTS_MAX_COUNT
  }, ((_, commentIndex) =>
    makeComment(commentIndex + 1)))
});

console.log(createPhotoDescription(2));
const photosDescriptions = Array.from({
  length: DESCRIPTION_ARRAY_LENGTH
}, (_, index) => createPhotoDescription(index + 1));
console.log(photosDescriptions);
