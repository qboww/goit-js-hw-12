export function createGallaryMarkup(array) {
  function capitalizeFirstLetter(tag) {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }

  return array
    .map(
      image =>
        `<li class="gallery-item">
          <div class="image-container">
            <a class="gallery-link" href="${image.largeImageURL}">
              <img class="gallery-image" src="${image.webformatURL}" alt="${
          image.tags
        }" data-source="${image.largeImageURL}">
            </a>
          </div>
          <div class="gallery-tags">
            <h2 class="gallery-tags-header">${capitalizeFirstLetter(image.tags)}</h2>
          </div>
          <div class="desc-container">
            <ul class="list-data">
                <li class="desc-item">
                    <h3 class="gallery-header">Likes</h3>
                    <p class="gallery-text">${image.likes}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Views</h3>
                    <p class="gallery-text">${image.views}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Comments</h3>
                    <p class="gallery-text">${image.comments}</p>
                </li>
                <li class="desc-item">
                    <h3 class="gallery-header">Downloads</h3>
                    <p class="gallery-text">${image.downloads}</p>
                </li>
            </ul>
          </div>
      </li>`
    )
    .join('');
}
