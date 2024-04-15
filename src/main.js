import { list, form, load } from './js/refs.js';
import { getPhotos } from './js/pixabay-api.js';
import { createGallaryMarkup } from './js/render-functions.js';
import { showLoader, hiddeLoader } from './js/loader.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let searchQuery = null;
let totalImagesLoaded = 0;

form.addEventListener('submit', onSubmit);
load.addEventListener('click', onClick);

function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.search.value.trim();
  list.innerHTML = '';
  totalImagesLoaded = 0;
  page = 1;

  showLoader();

  getPhotos(searchQuery, page)
    .then(response => {
      if (!searchQuery || response.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 300,
        });
      }

      list.innerHTML = createGallaryMarkup(response.hits);

      if (response.total > 15) {
        load.classList.remove('is-hidden');
      }

      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });

  event.currentTarget.elements.search.value = '';
}

function onClick() {
  page += 1;

  getPhotos(searchQuery, page).then(response => {
    const remainingImages = 100 - totalImagesLoaded;
    const imagesToAdd = Math.min(response.hits.length, remainingImages);

    list.insertAdjacentHTML('beforeend', createGallaryMarkup(response.hits.slice(0, imagesToAdd)));
    totalImagesLoaded += imagesToAdd;

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (totalImagesLoaded >= 100) {
      load.classList.add('is-hidden');
      iziToast.warning({
        message: 'You have reached the maximum limit of images (100).',
        position: 'topRight',
      });
    }

    lightbox.refresh();
  });
}
