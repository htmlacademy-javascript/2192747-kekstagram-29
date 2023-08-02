const fullPhotoPopup = document.querySelector('.big-picture ');
const fullPhotoOpen = document.querySelector('picture');

fullPhotoOpen.addEventListener('click', () => {
  fullPhotoPopup.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});
