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

  showLoader();

  searchQuery = event.currentTarget.elements.search.value.trim();
  list.innerHTML = '';
  totalImagesLoaded = 0;
  page = 1;

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

      // Check if there are more images available for loading
      const totalHits = response.totalHits;
      if (totalHits > totalImagesLoaded) {
        load.classList.remove('is-hidden');
      } else {
        load.classList.add('is-hidden');
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
    const remainingImages = response.totalHits - totalImagesLoaded;
    const imagesToAdd = Math.min(response.hits.length, remainingImages);

    list.insertAdjacentHTML('beforeend', createGallaryMarkup(response.hits.slice(0, imagesToAdd)));
    totalImagesLoaded += imagesToAdd;

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2.2,
      behavior: 'smooth',
    });

    if (totalImagesLoaded >= response.totalHits) {
      load.classList.add('is-hidden');
      iziToast.warning({
        message: `You have reached the maximum limit of images (${totalImagesLoaded}).`,
        position: 'topRight',
      });
    }

    lightbox.refresh();
  });
}
