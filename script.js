const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const vehicle = String(data.get('vehicle') || '').trim();
  const message = String(data.get('message') || '').trim();
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = 'Thanks for your interest. This preview form is not connected to a live inbox yet. Please call (714) 316-9962 to continue your enquiry.';
});


// Highlight the current weekday in the weekly hours panel.
const today = new Date().getDay();
document.querySelector(`.hours-row[data-day="${today}"]`)?.classList.add('today');

// The banner booking action takes visitors to the enquiry form and adds a booking prompt.
document.querySelector('[data-booking-link]')?.addEventListener('click', () => {
  const messageField = document.getElementById('message');
  if (messageField && !messageField.value.trim()) {
    messageField.value = "I'd like to request an appointment. Please let me know what times are available.";
  }
});
