import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

console.log(galleryRef);

function createGalleryMarkup (items) {
    const markup = items.map(item => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </div>`}).join("");

    galleryRef.innerHTML = markup;
}

createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
  
    const originImgUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${originImgUrl}">`);

    instance.show()

    window.addEventListener("keydown", onEscKeydown)

    function onEscKeydown(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
}

console.log(galleryItems);
