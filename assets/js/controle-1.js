document.addEventListener("DOMContentLoaded", function () {
  // Simule um atraso de 2 segundos (2000 milissegundos)
  setTimeout(function () {
    // Remova a tela de preload e exiba o conteúdo principal
    document.querySelector(".preload").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 500);

  let shouldScrollToFooter = false;
  const linkContato = document.getElementById("link-contato");
  const topButton = document.getElementById("topButton");
  const offcanvas = document.querySelector(".offcanvas");
  const backtotop = document.querySelector('.back-to-top');

  linkContato.addEventListener("click", function (e) {
    e.preventDefault();
    shouldScrollToFooter = true;

    if (offcanvas.classList.contains("show")) {
      const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
      offcanvasInstance.hide();
    }
  });

  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    if (shouldScrollToFooter) {
      const secaoFormulario = document.getElementById("footer");
      if (secaoFormulario) {
        secaoFormulario.scrollIntoView({ behavior: 'smooth' });
        shouldScrollToFooter = false;
      }
    }
  });

  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  (function () {
    'use strict';

    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      };
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    if (backtotop) {
      const toggleBacktotop = () => {
        backtotop.style.bottom = window.scrollY > 100 ? '20px' : '-60px';
      };

      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  })();
});
