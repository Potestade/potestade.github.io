// JavaScript para obter a largura do container
  var container = document.getElementById('myContainer');
  var containerWidth = window.getComputedStyle(container).getPropertyValue('width');
  
  // Exibir a largura do container em um elemento de texto
  var larguraTexto = document.getElementById('larguraTexto');
  larguraTexto.textContent = 'Largura do container: ' + containerWidth;
  
  // Usar o valor da largura do container para definir a largura do card
  var card = document.getElementById('myCard');
  card.style.width = containerWidth;