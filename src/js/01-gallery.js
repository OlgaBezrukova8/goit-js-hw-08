import Simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markupItem = createItemOfGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', markupItem);

function createItemOfGallery() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
    <div>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
