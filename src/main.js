import { list, form, input } from './js/refs.js';
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

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.search.value.trim();
  showLoader();
  list.innerHTML = '';

  console.log(searchQuery);

  getPhotos(searchQuery)
    .then(response => {
      if (!searchQuery || response.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 330,
        });
      }

      list.innerHTML = createGallaryMarkup(response.hits);

      lightbox.refresh();
      console.log(response.hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });
  input.value = '';
}
