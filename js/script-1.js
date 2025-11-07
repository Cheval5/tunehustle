
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Accessibility: toggle on Enter or Space
hamburger.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menu.classList.toggle('active');
  }
});


// Currency detection and price formatting
async function setLocalCurrency() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    let currency = 'USD';
    let rates = { USD: 1, GBP: 0.79, EUR: 0.92 }; // Example rates
    let symbols = { USD: '$', GBP: '£', EUR: '€' };

    // Detect currency by country code
    if (data.country_code === 'GB') {
      currency = 'GBP';
    } else if (['FR', 'DE', 'ES', 'IT', 'NL', 'BE', 'AT', 'IE', 'PT', 'FI', 'GR'].includes(data.country_code)) {
      currency = 'EUR';
    }

    // Update all product prices
    document.querySelectorAll('.product-price').forEach(el => {
      let basePrice = parseFloat(el.getAttribute('data-price')) || parseFloat(el.textContent.replace(/[^0-9.]/g, ''));
      let converted = basePrice * rates[currency];
      el.textContent = symbols[currency] + converted.toFixed(2);
    });
  } catch (e) {
    // Fallback: do nothing if API fails
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', setLocalCurrency);