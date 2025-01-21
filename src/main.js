import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { photoRequest } from "./js/pixabay-api";

import { createImgTemplate } from "./js/render-functions";

const searchForm = document.querySelector('.js-search-img-form');
const searchInput = document.querySelector('.js-search-img-input');
const galleryEl = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');

iziToast.settings({
  position: "topRight",
  messageSize: '20',
  messageColor: 'white',
  backgroundColor: '#EF4040',
  messageLineHeight: '25'
});

let simpleLightBoxLibrary = new SimpleLightbox('.js-gallery-list a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionHTML: true,
  enableKeyboard: true,
});

export const onSearchFormSumbit = event => {
    event.preventDefault();

    const searchedQuery = searchInput.value.trim();

    if (searchedQuery === '') {
        iziToast.warning({
                    message: "The field must be filled in.",
        })
        searchForm.reset();
        galleryEl.innerHTML = '';

        return;
    };

    loader.style.display = 'block';
    galleryEl.innerHTML = '';

    photoRequest(searchedQuery)
        .then(data => {

            loader.style.display = 'none';

            if (data.total === 0) {
                iziToast.warning({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    maxWidth: '432px',
                    class: 'toast-custom',
                })
                return;
            };

            const galleryTemplate = data.hits.map(el => createImgTemplate(el)).join('');
            galleryEl.innerHTML = galleryTemplate;

            simpleLightBoxLibrary.refresh();

        
            return; 
        })
        .catch(err => {
        console.log(err);
        });
};

searchForm.addEventListener('submit', onSearchFormSumbit);