import { showBigPhoto } from './full-photo.js';
const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (photos) => {
  photos.forEach(({ likes, comments, url, id, description }) => {
    const photo = pictureTemplate.cloneNode(true);
    const likesElement = photo.querySelector('.picture__likes');
    const commentsElement = photo.querySelector('.picture__comments');
    const imageElement = photo.querySelector('.picture__img');

    likesElement.textContent = likes;
    commentsElement.textContent = comments.length;
    imageElement.src = url;
    imageElement.alt = description;
    photo.dataset.photoId = id;

    picturesElement.appendChild(photo);
  });
};

const setPictureListener = (photos) => {
  picturesElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (!thumbnail) {
      return;
    }

    const photoId = parseInt(thumbnail.dataset.photoId, 10);
    const photo = photos.find((item) => item.id === photoId);

    if (photo) {
      showBigPhoto(photo);
    }
  });
};

export { renderPictures, setPictureListener };
