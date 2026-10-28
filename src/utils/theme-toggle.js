function setupThemeToggle() {
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const initialTheme = savedTheme || systemTheme;

  applyTheme(initialTheme);

  themeToggle?.addEventListener("click", () => {
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

function applyTheme(theme) {
  const html = document.documentElement;
  html.classList.remove("dark", "light");
  html.classList.add(theme);
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", setupThemeToggle);

// Re-run the setup when the content changes (for Astro page changes)
document.addEventListener("astro:page-load", setupThemeToggle);
