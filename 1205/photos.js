import {
  renderThumbnails
} from "./thumbnails";
import {
  showFullPhoto
} from ".full-photo";

const container = document.querySelector('.pictures');

const renderPhotosGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  renderThumbnails(pictures, container);
};

export { renderPhotosGallery };
