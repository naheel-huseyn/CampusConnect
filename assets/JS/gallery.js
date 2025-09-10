// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card__container a");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Active class change
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      const category = card.querySelector(".card").getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
