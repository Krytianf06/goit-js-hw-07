import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsEl = document.querySelector(".gallery");
galleryItemsEl.insertAdjacentHTML("beforeend",createGalleryCards (galleryItems));

const gallery = new SimpleLightbox('.gallery a', {captionsData:`alt`,captionDelay:250});
gallery.on('show.simplelightbox');

function createGalleryCards (galleryItems) {
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
        `;
    }).join('');
}

console.log(galleryItems);