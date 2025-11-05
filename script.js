
// Mobile nav toggle
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.nav-toggle');
  if (toggle) document.querySelector('.nav').classList.toggle('open');
});

// WhatsApp prefill for product buttons
const PHONE_INTL = '919265550647'; // Change if your country code is different
function waLink(text) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${PHONE_INTL}?text=${msg}`;
}

document.querySelectorAll('[data-wa]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const product = btn.getAttribute('data-wa');
    const url = waLink(`Jai Shri Krishna! I want to order: ${product} (Size: __).`);
    window.open(url, '_blank');
  });
});

// Quick form -> WhatsApp
const form = document.getElementById('quickForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const need = data.get('need');
    const size = data.get('size');
    const text = `Jai Shri Krishna!\nName: ${name}\nNeed: ${need}\nSize: ${size}`;
    window.open(waLink(text), '_blank');
  });
}
