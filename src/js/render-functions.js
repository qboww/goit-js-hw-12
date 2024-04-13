export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" data-source="${image.largeImageURL}">
          </a>
          <div>
            <ul class="list-data">
                <li>
                    <h3>Likes</h3>
                    <p>${image.likes}</p>
                </li>
                <li>
                    <h3>Views</h3>
                    <p>${image.views}</p>
                </li>
                <li>
                    <h3>Comments</h3>
                    <p>${image.comments}</p>
                </li>
                <li>
                    <h3>Downloads</h3>
                    <p>${image.downloads}</p>
                </li>
            </ul>
          </div>
      </li>`
    )
    .join('');
}
