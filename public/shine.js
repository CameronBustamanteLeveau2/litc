// 🌸 Generador de glitter rosa
$(function() {
  const container = $('#starshine');
  const template = $('.template.shine');
  const total = 80;   // número de sparkles
  const delayRange = 8; // segundos de variación de animación

  function createSparkle(size) {
    template.clone()
      .removeAttr('class')
      .addClass('shine ' + size)
      .css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        animationDelay: (Math.random() * delayRange) + 's'
      })
      .appendTo(container);
  }

  for (let i = 0; i < total; i++) {
    let size = (i % 3 === 0) ? 'large' : (i % 2 === 0) ? 'medium' : 'small';
    createSparkle(size);
  }
});
