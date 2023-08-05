import {
  generateModal
} from './full-photo.js';


const templateThumbnail = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const thumbnail = templateThumbnail.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = picture.url;
  thumbnail.querySelector('.picture__img').alt = picture.description;
  thumbnail.querySelector('.picture__comments').textContent = picture.comment.length;
  thumbnail.querySelector('.picture__likes').textContent = picture.likes;

  const openFullSize = () => thumbnail.addEventListener(
    'click', generateModal(picture));

  thumbnail.addEventListener('click', openFullSize);

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  picturesContainer.append(fragment);
};

export {
  renderThumbnails
};
