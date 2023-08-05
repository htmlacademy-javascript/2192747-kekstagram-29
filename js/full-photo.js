import {isEscapeKey} from './util.js';

const COMMENT_PER_PORTION = 5;

const fullPhotoModal = document.querySelector('.big-picture');
const fullPhotoContainer = fullPhotoModal.querySelector('.big-picture__img img');
const closeButton = fullPhotoModal.querySelector('.big-picture__cancel');
const likesCount = fullPhotoModal.querySelector('.likes-count');
const socialCaption = fullPhotoModal.querySelector('.social__caption');
const body = document.querySelector('body');
const commentsLoaderElement = fullPhotoModal.querySelector('.comments-loader');
const commentsListElement = fullPhotoModal.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsCount = fullPhotoModal.querySelector('.comments-count');

let commentsShown = 0;
let commentsArray = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullPhotoModal.classList.add('hidden');
  }
};

const closePhotoModal = () => {
  closeButton.addEventListener('click', () => {
    fullPhotoModal.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    commentsShown = 0;
  });
};

const openPhotoModal = () => {
  fullPhotoModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComment = () => {

  commentsListElement.textContent = '';
  commentsShown += COMMENT_PER_PORTION;
  if (commentsShown >= commentsArray.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = commentsArray.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(commentsArray[i]);
    fragment.append(comment);
  }
  commentsListElement.innerHTML = '';
  commentsListElement.append(fragment);
  commentsCount.textContent = `${commentsShown} из ${commentsArray.length}`;

};

const onCommentsLoaderButtonClick = () => renderComment();

const generateModal = (picture) => {
  openPhotoModal();
  closePhotoModal();
  fullPhotoContainer.src = picture.url;
  likesCount.textContent = picture.likes;
  socialCaption.textContent = picture.description;
  commentsLoaderElement.addEventListener('click', onCommentsLoaderButtonClick);
  commentsArray = picture.comment;

  if (commentsArray.length === 0) {
    commentsListElement.innerHTML = '';
    commentsLoaderElement.classList.add('hidden');
    commentsCount.textContent = `${commentsShown} из ${commentsArray.length}`;
  }
  if (commentsArray.length > 0) {
    renderComment(picture.comment);
  }
};


export {generateModal};
