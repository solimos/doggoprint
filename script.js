document.addEventListener("DOMContentLoaded", () => {

  const printer = document.querySelector('.printer'),
  printBtn = document.querySelector('.print-btn'),
  dogImage = document.querySelector('.dog-image'),
  lightbox = document.querySelector('.lightbox'),
  lightboxImage = document.querySelector('.lightbox-image');

  let printing = false;

  //Fetch dog image
  fetch('https://dog.ceo/api/breeds/image/random').
  then(res => res.json()).
  then(data => {
    const dogURL = data.message;
    dogImage.src = dogURL;
    lightboxImage.src = dogURL;
  });

  printBtn.addEventListener('click', () => {
    if (!printing) printer.classList.add('printing');
  });

  dogImage.addEventListener('click', () => lightbox.classList.add('show'));

  lightbox.addEventListener('click', () => lightbox.classList.remove('show'));

  lightboxImage.addEventListener('click', e => e.stopPropagation());

  //CodePen preview window
  if (location.pathname.includes('fullcpgrid')) printer.classList.add('printing');

});