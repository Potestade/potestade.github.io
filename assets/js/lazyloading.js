/*
*   Image Lazy Loading CSS
*/

document.addEventListener('DOMContentLoaded', function () {
  // Carregar imagens de fundo ocultas
  const lazyBackgrounds = document.querySelectorAll('.lazy-load');

  lazyBackgrounds.forEach(function (lazyBackground) {
    const imageSrc = lazyBackground.getAttribute('data-src');
    lazyBackground.style.backgroundImage = `url('${imageSrc}')`;
  });

  // Exibir as imagens de fundo
  lazyBackgrounds.forEach(function (lazyBackground) {
    lazyBackground.style.display = 'block';
  });
});


/*
*   FIM
*/