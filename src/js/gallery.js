import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabayAPI';

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();

  fetchImages(query)
    .then(data => {
      console.log('', data);
      createGAlleryMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
});

//----------------------------Helpers

function createGAlleryMarkup(list) {
  const markup = list.map(createGalleryMarkup).join('');
  gallery.insertAdjacentHTML('afterbegin', markup);
}

function createGalleryMarkup({
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  webformatURL,
}) {
  return `
  <div class="photo-card">
    <a class="photo-card__link" href="${largeImageURL}">
        <img class="photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    
    <div class="info">
        <p class="info-item">
            <b>Likes <span>${likes}</span></b>
        </p>
            <p class="info-item">
        <b>Views <span>${views}</span></b>
        </p>
        <p class="info-item">
            <b>Comments <span>${comments}</span></b>
        </p>
        <p class="info-item">
            <b>Downloads <span>${downloads}</span></b>
        </p>
    </div>
</div>`;
}
