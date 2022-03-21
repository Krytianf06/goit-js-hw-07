import { galleryItems } from './gallery-items.js';

const galleryItemsEl = document.querySelector(".gallery");
galleryItemsEl.insertAdjacentHTML("beforeend",createGalleryCards (galleryItems));

galleryItemsEl.addEventListener('click',selectGalleryCards);


function createGalleryCards (galleryItems) {
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('')
}


function selectGalleryCards (event) {
    event.preventDefault(); 

    const isGalleryItemEl = event.target.classList.contains('gallery__image');

    if (!isGalleryItemEl) {
        return;
    }

    const instance = basicLightbox.create(`<img src=${event.target.dataset.source} width="800" height="600">`, 
    {
        onShow: (instance) => document.addEventListener('keydown', clickOnEsc),
    })
   
    instance.show();
    console.log("Okno modalne włączone"); 
    
     function clickOnEsc(event) {
        if (event.code == 'Escape') {
                instance.close();
                 console.log("Zamykanie Esc");
            }
    }
}
console.log(galleryItems);
