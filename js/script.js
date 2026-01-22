// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'dark-theme' ? '🌙' : '🌞';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? '🌙' : '🌞';
  localStorage.setItem('theme', isDark ? 'dark-theme' : '');
});

// ===== ADD TO CART POPUP =====
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector('.cart-popup');
    if (popup) {
      popup.classList.add('show');
      setTimeout(() => popup.classList.remove('show'), 1500);
    }
  });
});

// ===== FAQ TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // Close all others
      document.querySelectorAll(".faq-answer").forEach((a) => {
        if (a !== answer) a.classList.remove("open");
      });

      // Toggle selected
      answer.classList.toggle("open");
    });
  });
});
// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-bar');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
      const name = product.querySelector('h3').textContent.toLowerCase();
      if (name.includes(query)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
  });
}
