async function loadEventDetail() {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  const res = await fetch("assets/JS/event.json");
  const events = await res.json();
  const event = events.find(e => e.id === eventId);

  if (!event) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Event not found!</h2>";
    return;
  }

  // Hero
  document.querySelector(".event-hero").style.backgroundImage = `url('${event.banner}')`;
  document.getElementById("eventTitle").innerText = event.title;
  document.getElementById("eventCategory").innerText = event.category ?? "";

  // Details
  document.getElementById("eventDescription").innerText = event.description;
  document.getElementById("eventDate").innerText = event.date;
  document.getElementById("eventTime").innerText = event.time;
  document.getElementById("eventVenue").innerText = event.venue;
  document.getElementById("organizerName").innerText = event.organizer.name;
  document.getElementById("organizerEmail").innerText = event.organizer.email;
  document.getElementById("organizerPhone").innerText = event.organizer.phone;
  document.getElementById("eventImage").src = event.image;
}

// Popup Logic
const registerPopup = document.getElementById("registerPopup");
const registerBtn = document.getElementById("registerBtn");
const closePopup = document.getElementById("closePopup");

// Open popup only on click
registerBtn.addEventListener("click", () => {
  registerPopup.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
  registerPopup.style.display = "none";
});

// Handle form submit
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  registerPopup.style.display = "none";
  alert(`🎉 Thank you ${name}! We will contact you at ${email}.`);
});

loadEventDetail();
