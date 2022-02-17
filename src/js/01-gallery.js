// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line
const list = document.querySelector('.gallery');

const newList = galleryItems
  .map(
    ({ original, preview, description }) => `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" alt="${description}"/>
        </a>`,
  )
  .join('');

list.insertAdjacentHTML('beforeend', newList);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
