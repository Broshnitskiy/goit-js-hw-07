import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

console.log(galleryRef);

function createGalleryMarkup (items) {
    const markup = items.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`}).join("");

    galleryRef.innerHTML = markup;
}

createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery .gallery__item', {captionsData: "alt", captionPosition: "botton", captionDelay: 250});

console.log(galleryItems);
