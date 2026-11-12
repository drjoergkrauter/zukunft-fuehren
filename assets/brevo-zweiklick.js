/* Zwei-Klick-Lösung für das Brevo-Anmeldeformular.
   Das Formular wird erst geladen, wenn die Besucherin oder der Besucher
   auf den Knopf klickt. Vorher wird keine Verbindung zu Brevo hergestellt. */
(function () {
  var css = '.bz-box{border:1px dashed #b9c2d0;border-radius:8px;padding:18px 18px 16px;background:#fff;max-width:560px}' +
    '.bz-box p{font-size:14px;line-height:1.5;color:#3d4657;margin:0 0 12px}' +
    '.bz-box button{font:inherit;font-size:15px;font-weight:600;color:#fff;background:#1b2a4a;border:0;border-radius:6px;padding:11px 18px;cursor:pointer}' +
    '.bz-box button:hover,.bz-box button:focus{background:#c8102e}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  function laden(box) {
    var f = document.createElement('iframe');
    f.src = box.getAttribute('data-src');
    f.title = box.getAttribute('data-title') || 'Anmeldeformular';
    f.setAttribute('frameborder', '0');
    f.setAttribute('scrolling', 'auto');
    var stil = box.getAttribute('data-style');
    if (stil) f.setAttribute('style', stil);
    var h = box.getAttribute('data-height');
    if (h) f.setAttribute('height', h);
    var w = box.getAttribute('data-width');
    if (w) f.setAttribute('width', w);
    box.parentNode.replaceChild(f, box);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.bz-box button') : null;
    if (b) laden(b.closest('.bz-box'));
  });
})();
