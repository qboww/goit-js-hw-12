import axios from 'axios';

export function getPhotos(query) {
  const API_KEY = '39798508-185d62676ae5604e87a61a702';
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: true,
  });

  return axios
    .get(`${baseUrl}/?${params}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
