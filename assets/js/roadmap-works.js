/*
 * Research roadmap: directions -> works cards.
 *
 * Progressive enhancement over roadmap.html. Without JavaScript the
 * fishbone is a static drawing; this script makes each direction a button
 * that opens its works card (a toggletip) and fades the other directions.
 *
 * One state, three inputs, so they never disagree:
 * - a mouse or pen pointing at a direction previews it, after a short
 *   delay so sweeping across the fish does not flash every card; the
 *   card stays while the pointer moves onto it, so it can be read and
 *   selected (WCAG 1.4.13, content on hover);
 * - a tap or click pins it, so it stays open on a phone (tap it again,
 *   tap elsewhere or press Escape to close);
 * - keyboard focus opens it; Enter or Space pins it, like a button.
 *
 * What is shown is the hovered direction, else the focused one, else the
 * pinned one. Escape closes whatever is open, hover included. The look is
 * driven only by the classes set here (.has-active on the figure,
 * .is-active on the branch and its card), never by :hover, so a tapped
 * branch cannot stay stuck lit on a touch screen.
 *
 * ARIA follows the toggletip pattern: the branch is a button with
 * aria-expanded and aria-controls, the card has role="tooltip", and there
 * is no aria-describedby — a description read after "button" muddles what
 * pressing it does.
 */
(function () {
  var fig = document.querySelector('[data-rm]');
  if (!fig) return;

  var SHOW_DELAY = 150, HIDE_DELAY = 200; // ms

  var branches = Array.prototype.slice.call(fig.querySelectorAll('.rm-branch[data-dir]'));
  var cards = {};
  Array.prototype.forEach.call(fig.querySelectorAll('.rm-card[data-dir]'), function (c) {
    cards[c.getAttribute('data-dir')] = c;
  });

  var hover = null, focus = null, pinned = null, shown;
  var showTimer = 0, hideTimer = 0;

  function render() {
    var next = hover || focus || pinned;
    if (next === shown) return;
    shown = next;
    fig.classList.toggle('has-active', !!shown);
    branches.forEach(function (b) {
      var on = b.getAttribute('data-dir') === shown;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    Object.keys(cards).forEach(function (k) {
      cards[k].classList.toggle('is-active', k === shown);
    });
  }

  function toggle(id) {
    pinned = pinned === id ? null : id;
    render();
  }

  // Hover intent. Entering a direction opens it after SHOW_DELAY; leaving a
  // direction or its card closes it after HIDE_DELAY, unless the pointer has
  // reached the card (or come back) by then. The show delay also covers the
  // trip down to the card, which can cross another direction's label.
  function hoverIn(id) {
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    if (hover === id) return;
    showTimer = setTimeout(function () { hover = id; render(); }, SHOW_DELAY);
  }
  function hoverOut() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { hover = null; render(); }, HIDE_DELAY);
  }
  function mouseLike(e) { return e.pointerType !== 'touch'; }

  branches.forEach(function (b) {
    var id = b.getAttribute('data-dir');
    var card = cards[id];
    if (!card) return;

    b.setAttribute('tabindex', '0');
    b.setAttribute('role', 'button');
    b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-controls', card.id);
    // The label as drawn, with its line break as a space (SVG tspans would
    // otherwise run "Distributed" into "statistical").
    b.setAttribute('aria-label', card.getAttribute('data-name'));

    // Touch fires enter/leave around every tap; the click below handles it.
    b.addEventListener('pointerenter', function (e) { if (mouseLike(e)) hoverIn(id); });
    b.addEventListener('pointerleave', function (e) { if (mouseLike(e)) hoverOut(); });
    card.addEventListener('pointerenter', function (e) {
      if (mouseLike(e) && hover === id) { clearTimeout(hideTimer); clearTimeout(showTimer); }
    });
    card.addEventListener('pointerleave', function (e) { if (mouseLike(e) && hover === id) hoverOut(); });

    // Only keyboard focus opens a card. A click focuses the branch too, but
    // that is the pin's job, and it should not hold the card open on its own.
    b.addEventListener('focus', function () {
      var kb = true;
      try { kb = b.matches(':focus-visible'); } catch (err) {}
      if (kb) { focus = id; render(); }
    });
    b.addEventListener('blur', function () {
      if (focus === id) focus = null;
      render();
    });

    // As a native button: Enter acts on keydown, Space on keyup (keydown
    // only stops the page from scrolling).
    b.addEventListener('click', function () { toggle(id); });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); toggle(id); }
      else if (e.key === ' ') e.preventDefault();
    });
    b.addEventListener('keyup', function (e) {
      if (e.key === ' ') { e.preventDefault(); toggle(id); }
    });
  });

  // SVG text takes the pointer only on its glyphs, so the gap between a
  // label's two lines would drop the hover halfway across. Lay a padded,
  // unpainted box behind each label — rounded, since it also draws the focus
  // ring. Measured once the web font is in: the fallback sets other widths.
  var NS = 'http://www.w3.org/2000/svg';
  function hitBoxes() {
    branches.forEach(function (b) {
      Array.prototype.forEach.call(b.querySelectorAll('.rm-hit-box'), function (r) { r.remove(); });
      Array.prototype.forEach.call(b.querySelectorAll('text'), function (t) {
        var box = t.getBBox(), pad = 8;
        var r = document.createElementNS(NS, 'rect');
        r.setAttribute('class', 'rm-hit-box');
        r.setAttribute('x', box.x - pad);
        r.setAttribute('y', box.y - pad);
        r.setAttribute('width', box.width + 2 * pad);
        r.setAttribute('height', box.height + 2 * pad);
        r.setAttribute('rx', 10);
        b.insertBefore(r, b.firstChild);
      });
    });
  }
  hitBoxes();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(hitBoxes);

  // pointerdown rather than click: mobile Safari sends no click for a tap on
  // plain text or empty page, so a click listener would never hear it. A tap
  // inside the open card is not "elsewhere".
  document.addEventListener('pointerdown', function (e) {
    if (pinned && !(e.target.closest && e.target.closest('.rm-branch, .rm-card'))) {
      pinned = null; render();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && shown) {
      clearTimeout(showTimer); clearTimeout(hideTimer);
      hover = null; pinned = null; focus = null; render();
    }
  });

  fig.classList.add('is-ready');
  render();
})();
