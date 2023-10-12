document.addEventListener("DOMContentLoaded", function () {
  let shouldScrollToFooter = false; // Variável de controle

  const linkContato = document.getElementById("link-contato");

  linkContato.addEventListener("click", function (e) {
    e.preventDefault();

    // Define a variável para rolar até o footer
    shouldScrollToFooter = true;

    // Fecha o offcanvas padrão, se estiver aberto
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
      offcanvasInstance.hide();
    }
  });

  // Adiciona um ouvinte para quando o offcanvas for fechado
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
});
