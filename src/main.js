import { list, form, load } from './js/refs.js';
import { getPhotos } from './js/pixabay-api.js';
import { createGallaryMarkup } from './js/render-functions.js';
import { showLoader, hiddeLoader } from './js/loader.js';
import { lightbox } from './js/misc/lightbox.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page = 1;
let searchQuery = null;
let totalImagesLoaded = 0;
let firstSubmit = false;

form.addEventListener('submit', onSubmit);
load.addEventListener('click', onClick);

function onSubmit(event) {
  event.preventDefault();
  firstSubmit = false;
  showLoader();

  searchQuery = event.currentTarget.elements.search.value.trim();
  totalImagesLoaded = 0;
  page = 1;

  list.innerHTML = '';

  loadPhotos(searchQuery, page);
}

async function loadPhotos(query, page) {
  try {
    const response = await getPhotos(query, page);

    if (!searchQuery || response.hits.length === 0) {
      load.classList.add('is-hidden');

      return iziToast.error({
        position: 'topRight',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        maxWidth: 300,
      });
    }

    list.insertAdjacentHTML('beforeend', createGallaryMarkup(response.hits));

    if (firstSubmit) {
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .lastElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    firstSubmit = true;
    totalImagesLoaded += response.hits.length;
    const totalHits = response.totalHits;

    if (totalHits > totalImagesLoaded) {
      load.classList.remove('is-hidden');
    } else {
      load.classList.add('is-hidden');

      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        maxWidth: 300,
      });
    }

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
  }
}

function onClick() {
  page += 1;

  loadPhotos(searchQuery, page);
}
