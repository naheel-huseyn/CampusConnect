// Category filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
let selectedCategory = "all"; // default category
let selectedMonth = "all";    // default month

// Add click event to category buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    filterBtns.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    selectedCategory = this.getAttribute("data-filter");
    filterCards();
  });
});

// Month dropdown filter
document.getElementById("monthFilter").addEventListener("change", function () {
  selectedMonth = this.value;
  filterCards();
});

// Function to filter cards based on both category and month
function filterCards() {
  const cards = document.querySelectorAll("#lightgallery a");
  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    const cardDate = card.getAttribute("data-date");

    // Check both filters
    const categoryMatch = selectedCategory === "all" || cardCategory === selectedCategory;
    const monthMatch = selectedMonth === "all" || cardDate.startsWith(selectedMonth);

    if (categoryMatch && monthMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
