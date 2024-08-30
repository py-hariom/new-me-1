// Select all elements with class 'panel'
const panels = document.querySelectorAll('.panel');

// Add event listener to each panel
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Remove 'active' class from all panels
    panels.forEach(p => p.classList.remove('active'));
    // Add 'active' class to the clicked panel
    panel.classList.add('active');
  });
});