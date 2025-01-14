// script.js

// Get the button element
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode was previously enabled in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add event listener to toggle theme
themeToggleButton.addEventListener('click', () => {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark-mode');

  // Save the theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});
