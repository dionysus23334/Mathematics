/* Add the current Rudin chapter's page TOC as sidebar "small points".
   MkDocs nav does not reliably resolve explicit heading anchors, so the
   sidebar section list is cloned from the right-hand page TOC. */
(function () {
  function init() {
    if (!location.pathname.includes('/theory/rudin/')) return;

    var primary = document.querySelector('.md-nav--primary');
    var secondary = document.querySelector('.md-nav--secondary');
    if (!primary || !secondary) return;

    var active = primary.querySelector('.md-nav__link--active');
    if (!active) return;

    var item = active.closest('.md-nav__item');
    if (!item || item.querySelector('.rudin-subtoc')) return;

    var source = secondary.querySelector('.md-nav__list');
    if (!source) return;

    var ul = document.createElement('ul');
    ul.className = 'md-nav__list rudin-subtoc';

    Array.prototype.forEach.call(
      source.querySelectorAll(':scope > .md-nav__item'),
      function (node) {
        var clone = node.cloneNode(true);
        // Only show chapter sections (h2); theorem-level h3 stays in the right TOC.
        Array.prototype.forEach.call(clone.querySelectorAll('nav.md-nav'), function (nav) {
          nav.remove();
        });
        Array.prototype.forEach.call(clone.querySelectorAll('a'), function (a) {
          a.classList.remove('md-nav__link--active');
          a.removeAttribute('aria-current');
        });
        ul.appendChild(clone);
      }
    );

    if (ul.children.length) item.appendChild(ul);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 80); });
  } else {
    setTimeout(init, 80);
  }

  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(init);
  }
})();
