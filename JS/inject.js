async function loadHTML(selector, file) {
  const element = document.querySelector(selector);
  if (element) {
    try {
      const res = await fetch(file);
      const html = await res.text();
      element.innerHTML = html;
    } catch (err) {
      console.error(`Could not load ${file}:`, err);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("#navbar", "/PARTIALS/navbar.html");
  loadHTML("#main", "/PARTIALS/main.html");
  loadHTML("#footer", "/PARTIALS/footer.html");
});