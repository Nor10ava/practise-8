import { galleryItems } from './gallery';
console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
};
let activeIndex = null;
function createGallery(images) {
  return images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
  });
}
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.src = e.target.dataset.source;
  createGallery(galleryItems).forEach((element, index) => {
    if (element.includes(e.target.src)) {
      activeIndex = index;
    }
  });
  window.addEventListener('keydown', closeByEscape);
  window.addEventListener('keydown', changeByArrows);
}

function closeModal(e) {
  if (e.target.nodeName === 'IMG') {
    return;
  }
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImg.src = ' ';
  window.removeEventListener('keydown', closeByEscape);
  window.removeEventListener('keydown', changeByArrows);
}
function closeByEscape(e) {
  if (e.key !== 'Escape') {
    return;
  }
  closeModal(e);
  console.log('hello');
}
function changeByArrows(e) {
  if (e.key === 'ArrowRight' && activeIndex < galleryItems.length - 1) {
    refs.lightboxImg.src = galleryItems[(activeIndex += 1)].original;
    return;
  }
  if (e.key === 'ArrowLeft' && activeIndex > 0) {
    refs.lightboxImg.src = galleryItems[(activeIndex -= 1)].original;
    return;
  }
  if (e.key === 'ArrowRight' && activeIndex === galleryItems.length - 1) {
    activeIndex = 0;
    refs.lightboxImg.src = galleryItems[activeIndex].original;
    return;
  }
  if (e.key === 'ArrowLeft' && activeIndex === 0) {
    activeIndex = galleryItems.length - 1;
    refs.lightboxImg.src = galleryItems[activeIndex].original;
    return;
  }
}
refs.gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems).join(''));
refs.gallery.addEventListener('click', openModal);
refs.lightbox.addEventListener('click', closeModal);
