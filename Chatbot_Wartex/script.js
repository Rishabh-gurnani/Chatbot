document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("theme-toggle-button");
    themeButton.addEventListener("click", toggleDarkMode);
  });
  
  function toggleDarkMode() {
    const body = document.body;
    const themeButton = document.getElementById("theme-toggle-button");
  
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      themeButton.textContent = "light_mode"; // Update button icon for light mode
    } else {
      body.classList.add("dark-mode");
      themeButton.textContent = "dark_mode"; // Update button icon for dark mode
    }
  }
