import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { PER_PAGE } from '../config';
import { fetchImages } from '../pixabayAPI';
import { createGAlleryMarkup } from './gallery-markup';

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
});

const pageState = createPageState();

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();

  fetchImages('cat', pageState.getPage(), PER_PAGE)
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

function createPageState(initial = 1) {
  let page = initial;

  return {
    getPage() {
      return page;
    },

    increasePage() {
      page += 1;
    },

    resetPage() {
      page = 1;
    },
  };
}
