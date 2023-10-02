const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/api/posts', (req, res) => {
  const blogDirectory = 'blog';
  fs.readdir(blogDirectory, (err, files) => {
    if (err) {
      console.error('Erro ao ler diretório:', err);
      res.status(500).json({ error: 'Erro ao ler diretório de postagens.' });
      return;
    }

    // Mapeia os nomes dos arquivos para objetos com data de criação
    const fileData = files.map((file) => {
      const filePath = path.join(blogDirectory, file);
      const stats = fs.statSync(filePath);
      return { name: file, creationDate: stats.birthtime };
    });

    // Ordena os objetos por data de criação (do mais recente para o mais antigo)
    fileData.sort((a, b) => b.creationDate - a.creationDate);

    // Retorna as 3 postagens mais recentes
    const recentPosts = fileData.slice(0, 3);

    // Envia os nomes das postagens como resposta
    res.json(recentPosts.map((post) => post.name));
  });
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
