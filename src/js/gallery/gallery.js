import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { PER_PAGE } from '../config';
import { createGallery } from './createGallery';
import { createGAlleryMarkup } from './gallery-markup';

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
});

const galleryIstance = createGallery(render, {
  limit: PER_PAGE,
  loader: createloader(),
  smoothScroll,
  loadMore: createLoadMore(),
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

function createloader() {
  const loaderRef = document.querySelector('.loader');
  loaderRef.style.display = 'none';

  return {
    start() {
      loaderRef.style.display = 'block';
    },

    stop() {
      loaderRef.style.display = 'none';
    },
  };
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function createLoadMore() {
  loadMoreBtn.style.display = 'none';

  return {
    show() {
      loadMoreBtn.style.display = 'block';
    },
    hide() {
      loadMoreBtn.style.display = 'none';
    },
  };
}
