import axios from 'axios';

export function getPhotos(query, page) {
  const API_KEY = '39798508-185d62676ae5604e87a61a702';
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  return axios
    .get(`${baseUrl}/?${params}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
