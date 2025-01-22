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
const loaderMoreImg = document.querySelector('.more-loader');
const moreImgBtn = document.querySelector('.js-more-img-btn');

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

let currentPage = 1;
let perPage = 15;
let searchedQuery = '';

const onSearchFormSumbit = async event => {
    try {
        event.preventDefault();

        moreImgBtn.style.display = 'none';

        currentPage = 1;
        perPage = 15;
        
        searchedQuery = searchInput.value.trim();

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
        
        const {data} = await photoRequest(searchedQuery, currentPage);

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

        if (data.totalHits > perPage) {
            moreImgBtn.style.display = 'block';
        };

        simpleLightBoxLibrary.refresh();

        return;
    } catch (err) {
        console.log(err);
    };
};

const loadMoreImgForm = async () => {
    try {
        moreImgBtn.style.display = 'none';
        loaderMoreImg.style.display = 'block';

        currentPage += 1;
        perPage += 15;

        const { data } = await photoRequest(searchedQuery, currentPage);

        const galleryTemplate = data.hits.map(el => createImgTemplate(el)).join('');

        loaderMoreImg.style.display = 'none';

        galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

        ScrollNextImgPage();

        simpleLightBoxLibrary.refresh();

        if (perPage >= data.totalHits) {
            iziToast.warning({
                message: "We're sorry, but you've reached the end of search results."
            });
            return;
        }
        moreImgBtn.style.display = 'block';
    } catch (err) {
        console.log(err);
    }
};

searchForm.addEventListener('submit', onSearchFormSumbit);
moreImgBtn.addEventListener('click', loadMoreImgForm);


const ScrollNextImgPage = () => {
    const galleryCard = galleryEl.firstElementChild;

    if (galleryCard) {
        const cardHeight = galleryCard.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    }
}