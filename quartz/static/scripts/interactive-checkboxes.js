// This script runs after the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // --- CORE LOGIC ---

  // Function to generate a unique ID for a checkbox
  // We use the page's path and the checkbox's index on the page
  function getCheckboxId(checkbox, index) {
    const pagePath = window.location.pathname;
    return `checkbox:${pagePath}:${index}`;
  }

  // Function to load the saved state of all checkboxes on the page
  function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
      // First, make the checkbox interactive
      checkbox.disabled = false;

      // Generate its unique ID
      const id = getCheckboxId(checkbox, index);

      // Check localStorage for a saved state
      const savedState = localStorage.getItem(id);

      // If a state is found, apply it
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    });
  }

  // Function to save the state of a specific checkbox
  function saveCheckboxState(checkbox, index) {
    const id = getCheckboxId(checkbox, index);
    localStorage.setItem(id, checkbox.checked);
  }

  // --- EVENT LISTENERS ---

  // Find all checkboxes on the page
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Add a 'change' event listener to each checkbox
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      saveCheckboxState(checkbox, index);
    });
  });

  // --- INITIALIZATION ---

  // Load the initial states of all checkboxes when the page loads
  loadCheckboxStates();
});