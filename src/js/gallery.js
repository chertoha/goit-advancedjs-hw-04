import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabayAPI';

const lightbox = new SimpleLightbox('.gallery a', {
  //   captions: true,
  //   captionsData: 'alt',
  //   captionDelay: 250,
  showCounter: false,
});

const form = document.querySelector('.search');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();

  //   console.log('query', query);

  fetchImages(query)
    .then(data => {
      console.log('', data);
      createGAlleryMarkup(data.hits);
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
  previewURL,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="photo-card">
    <a class="gallery__link" href="${largeImageURL}">
        <img clasas="gallery__img" src="${previewURL}" alt="${tags}" loading="lazy" />
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
</div`;

  //   return `
  //     <li class="gallery__item">
  //   <a class="gallery__link" href="${original}">
  //       <img class="gallery__image" src="${preview}" alt="${alt}" />
  //   </a>
  //     </li>
  // `;
}
