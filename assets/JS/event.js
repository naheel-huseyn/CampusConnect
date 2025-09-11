let eventsData = [];

async function loadEvents() {
  const container = document.getElementById("eventsContainer");
  const res = await fetch("assets/JS/event.json");
  eventsData = await res.json();

  renderEvents(eventsData);
}

// Render function
function renderEvents(events) {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  if (events.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No events found.</p>`;
    return;
  }

  events.forEach(event => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="event-card" data-aos="flip-left">
        <div class="event-inner">
          <div class="event-front">
            ${event.icon ? `<i class="${event.icon} fa-2x mb-2"></i>` : ""}
            <h3>${event.title}</h3>
            <p>${event.shortDescription}</p>
          </div>
          <div class="event-back">
            <img src="${event.image}" alt="${event.title}">
            <a href="event-detail.html?id=${event.id}" class="btn-view">View Details</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Search + Filter
document.addEventListener("input", () => {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const categoryValue = document.getElementById("categoryFilter").value;

  const filtered = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue ? event.category === categoryValue : true;
    return matchesSearch && matchesCategory;
  });

  renderEvents(filtered);
});

loadEvents();
