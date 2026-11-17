/*
 * News rows open in place (views/news-feed.html, news-feed--pinned.html).
 * Two conveniences on top of the native disclosure, both optional —
 * without JavaScript the rows still open and close from their title row:
 *
 * - An open item closes from anywhere in its text, not only from the
 *   title row above it. Clicks on a link or other control inside still do
 *   their own thing, and a click that ends a text selection is left alone,
 *   so the text can still be copied. Keyboard users close it from the
 *   title row, as before; this only widens the pointer target.
 *
 * - The feed scrolls in its own box. An item opened near the bottom would
 *   unfold out of sight, and one closed after reading down its text would
 *   leave its title row above the box; either way, bring it back into view
 *   — only as far as needed, smooth or instant as the page's CSS
 *   scroll-behavior (and reduced-motion setting) has it.
 */
(function () {
  var CONTROLS = 'a, button, input, select, textarea, label, summary, video, audio, iframe';

  Array.prototype.forEach.call(document.querySelectorAll('.bio-news details'), function (d) {
    var summary = d.querySelector(':scope > summary');
    var body = d.querySelector(':scope > .news-body');

    if (d.closest('.news-feed-items')) {
      d.addEventListener('toggle', function () {
        (d.open ? d : summary).scrollIntoView({ block: 'nearest' });
      });
    }

    if (!body) return;
    d.classList.add('news-closable'); // lets CSS show the whole item as a target
    body.addEventListener('click', function (e) {
      if (!d.open || (e.target.closest && e.target.closest(CONTROLS))) return;
      var sel = window.getSelection ? window.getSelection() : null;
      if (sel && !sel.isCollapsed && body.contains(sel.anchorNode)) return;
      d.open = false;
    });
  });
})();
