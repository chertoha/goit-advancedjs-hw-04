import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { PER_PAGE } from '../config';
import { createGalleryState } from '../createGalleryState';
import { fetchImages } from '../pixabayAPI';
import { createGAlleryMarkup } from './gallery-markup';

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
});

const galleryIstance = createGalleryState(render, {
  limit: PER_PAGE,
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  galleryIstance.setQuery(query);
});

loadMoreBtn.addEventListener('click', () => {
  galleryIstance.increasePage();
});

//----------------------------Helpers
function render(data) {
  const markup = createGAlleryMarkup(data);
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
