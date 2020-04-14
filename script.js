const galleryItem = document.querySelectorAll('.gallery__item');

const setClass = (element) => {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}
galleryItem.forEach((el) => {
  el.addEventListener('click', () => {
    setClass(el);
  });
})