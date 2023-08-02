const fullPhotoModal = document.querySelector('.big-picture ');
const commentCountElement = fullPhotoModal.querySelector('.social__comment-count');
const commentListElement = fullPhotoModal.querySelector('.social__comments');

const fullPhotoOpen = document.querySelector('picture');

fullPhotoOpen.addEventListener('click', () => {
  fullPhotoModal.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});
