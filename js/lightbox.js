(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = '<button class="lightbox-close">&times;</button>' +
      '<button class="lightbox-nav lightbox-prev">&#8249;</button>' +
      '<img src="" alt="">' +
      '<button class="lightbox-nav lightbox-next">&#8250;</button>' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(overlay);

    var img = overlay.querySelector('img');
    var caption = overlay.querySelector('.lightbox-caption');
    var items = [];
    var current = 0;

    function collectItems() {
      items = Array.from(document.querySelectorAll('.gallery-item, .gallery-grid .gallery-item'));
      var seen = new Set();
      items = items.filter(function(el) {
        if (seen.has(el)) return false;
        seen.add(el);
        return true;
      });
    }

    function show(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      current = index;
      var item = items[current];
      var itemImg = item.querySelector('img');
      var label = item.querySelector('.gallery-item-label span');
      img.src = itemImg.src;
      img.alt = itemImg.alt || '';
      caption.textContent = label ? label.textContent : itemImg.alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function hide() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function(e) {
      var item = e.target.closest('.gallery-item');
      if (item) {
        collectItems();
        var idx = items.indexOf(item);
        if (idx >= 0) show(idx);
      }
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', hide);
    overlay.querySelector('.lightbox-prev').addEventListener('click', function(e) { e.stopPropagation(); show(current - 1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', function(e) { e.stopPropagation(); show(current + 1); });
    overlay.addEventListener('click', function(e) { if (e.target === overlay) hide(); });

    document.addEventListener('keydown', function(e) {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') hide();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  });
})();
