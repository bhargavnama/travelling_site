// Tab switching
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.search-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('panel-' + tab);
  if (panel) panel.classList.add('active');
}

// Swap cities
function swapCities() {
  const fields = document.querySelectorAll('#panel-flights .field-input');
  if (fields.length >= 2) {
    const tmp = fields[0].value;
    fields[0].value = fields[1].value;
    fields[1].value = tmp;
    const subs = document.querySelectorAll('#panel-flights .field-sub');
    if (subs.length >= 2) {
      const t = subs[0].textContent;
      subs[0].textContent = subs[1].textContent;
      subs[1].textContent = t;
    }
  }
}

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 4) * 0.07 + 's';
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Wishlist toggle
document.querySelectorAll('.hotel-wishlist').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
  });
});

// Set today's date as default
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type=date]').forEach(inp => {
  if (!inp.value) inp.value = today;
});
