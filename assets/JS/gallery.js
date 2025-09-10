document.getElementById("monthFilter").addEventListener("change", function () {
  const selectedMonth = this.value;
  const cards = document.querySelectorAll("#lightgallery a");

  cards.forEach(card => {
    const date = card.getAttribute("data-date"); // e.g. 2025-03-10
    if (selectedMonth === "all" || date.startsWith(selectedMonth)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ===== LightGallery Init =====
document.addEventListener("DOMContentLoaded", function () {
  lightGallery(document.getElementById("lightgallery"), {
    plugins: [lgZoom, lgFullscreen, lgAutoplay],
    speed: 500,
    download: false,
    zoom: true,
    fullscreen: true,
    autoplay: true
  });
});
