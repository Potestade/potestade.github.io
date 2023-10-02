document.addEventListener("DOMContentLoaded", function () {
  const blogPostsElement = document.getElementById("blog-posts");

  // Caminho para o diretório das postagens do blog
  const blogDirectory = "blog/";

  // Faz uma requisição AJAX para obter a lista de arquivos no diretório
  fetch(blogDirectory)
      .then((response) => response.text())
      .then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const fileLinks = Array.from(doc.querySelectorAll("a"))
              .map((link) => link.getAttribute("href"))
              .filter((href) => href.endsWith(".html")) // Filtra apenas arquivos HTML
              .sort(); // Ordena alfabeticamente (como texto)

          // Obtém os últimos 3 arquivos com base na ordem alfabética
          const lastThreeFiles = fileLinks.slice(-3).reverse(); // Inverte a ordem

          // Exibe as postagens
          lastThreeFiles.forEach((fileName) => {
              //const postUrl = blogDirectory + fileName;
              //const postUrl = fileName;
              const postUrl = fileName;

              // Carrega e exibe a postagem
              fetch(postUrl)
                  .then((response) => response.text())
                  .then((html) => {
                      const postElement = document.createElement("div");
                      postElement.classList.add("col-md-4");
                      postElement.innerHTML = html;
                      blogPostsElement.appendChild(postElement);
                  })
                  .catch((error) => {
                      console.error("Erro ao carregar a postagem:", error);
                  });
          });
      })
      .catch((error) => {
          console.error("Erro ao listar os arquivos do diretório:", error);
      });
});
