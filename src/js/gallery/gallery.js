import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../pixabayAPI';
import { createGAlleryMarkup } from './gallery-markup';

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();

  fetchImages('cat')
    .then(data => {
      console.log('', data);
      const markup = createGAlleryMarkup(data.hits);
      gallery.insertAdjacentHTML('afterbegin', markup);
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
});

//----------------------------Helpers
