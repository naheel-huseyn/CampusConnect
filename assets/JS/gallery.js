// ===== Filter Functionality =====
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll("#lightgallery a"); // direct <a> select karo

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Active button highlight
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      const category = card.getAttribute("data-category"); // ab a tag ka attribute check hoga
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
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
