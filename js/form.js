import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { isEscapeKey } from './util.js';

const TOP_PRIORITY = 1;
const SECONDARY_PRIORITY = 2;
const TERTIARY_PRIORITY = 3;

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-я0-9]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Одинаковые хештеги',
  INVALID_PATTERN: 'Неправильный хэштег',
};
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');
const hashtagElement = document.querySelector('.text__hashtags');
const descpriptionElement = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
  pristine.reset();
  resetEffects();
  resetScale();
};

const isElementFocus = () =>
  document.activeElement === hashtagElement ||
  document.activeElement === descpriptionElement;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isElementFocus() && !body.classList.contains('has-modal')) {
    evt.preventDefault();
    hideModal();
  }
}

const normalizeTags = (tagString) => tagString.trim().split(' ').filter((tag) => Boolean(tag.length));
const isValidTag = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));
const isValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;
const isUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const onFileInputChange = () => showModal();

const onCancelButtonClick = () => hideModal();

const setupForm = () => {
  uploadFile.addEventListener('change', onFileInputChange);
  uploadCancelButton.addEventListener('click', onCancelButtonClick);

  pristine.addValidator(hashtagElement, isValidCount, ErrorText.INVALID_COUNT,TERTIARY_PRIORITY,true);
  pristine.addValidator(hashtagElement, isUniqueTags, ErrorText.NOT_UNIQUE,TOP_PRIORITY,true);
  pristine.addValidator(hashtagElement, isValidTag, ErrorText.INVALID_PATTERN,SECONDARY_PRIORITY,true);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      callback(new FormData(form));
    }
  });
};

export { setupForm, setOnFormSubmit, hideModal, unblockSubmitButton };
