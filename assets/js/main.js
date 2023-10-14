document.addEventListener("DOMContentLoaded", function () {
  let shouldScrollToFooter = false; // Variável de controle

  const linkContato = document.getElementById("link-contato");

  linkContato.addEventListener("click", function (e) {
    e.preventDefault();

//  Define a variável para rolar até o footer
    shouldScrollToFooter = true;

//  Fecha o offcanvas padrão, se estiver aberto
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
      offcanvasInstance.hide();
    }
  });

//   Adiciona um ouvinte para quando o offcanvas for fechado
  const offcanvas = document.querySelector(".offcanvas");
  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    if (shouldScrollToFooter) {
      // Rola até o ID "footer" (onde o formulário está)
      const secaoFormulario = document.getElementById("footer");
      if (secaoFormulario) {
        secaoFormulario.scrollIntoView({ behavior: 'smooth' });
        shouldScrollToFooter = false; // Reseta a variável
      }
    }
  });

  const topButton = document.getElementById("topButton");

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

    let backtotop = select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.style.bottom = '20px';
        } else {
          backtotop.style.bottom = '-60px';
        }
      };

      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  })();
});