document.addEventListener("DOMContentLoaded", function() {
    // Simule um atraso de 2 segundos (2000 milissegundos)
    setTimeout(function() {
        // Remova a tela de preload e exiba o conteúdo principal
        document.querySelector(".preload").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 500);
});