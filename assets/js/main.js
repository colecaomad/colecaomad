(function(){
  function initLightbox(){
    var trigger = document.querySelector('[data-zoom]');
    if(!trigger) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Fechar">&times;</button>' +
      '<img class="lightbox-img" src="" alt="">' +
      '<p class="lightbox-caption"></p>';
    document.body.appendChild(overlay);

    var img = overlay.querySelector('.lightbox-img');
    var caption = overlay.querySelector('.lightbox-caption');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function open(src, alt){
      img.src = src;
      img.alt = alt || '';
      caption.textContent = alt || '';
      overlay.classList.add('is-open');
      document.body.classList.add('lightbox-lock');
    }
    function close(){
      overlay.classList.remove('is-open');
      document.body.classList.remove('lightbox-lock');
      img.src = '';
    }

    document.querySelectorAll('[data-zoom]').forEach(function(el){
      el.addEventListener('click', function(){
        var full = el.getAttribute('data-zoom');
        var alt = el.querySelector('img') ? el.querySelector('img').alt : '';
        open(full, alt);
      });
    });

    overlay.addEventListener('click', function(e){
      if(e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') close();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
