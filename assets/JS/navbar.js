
const pages = [
  { name: "Home", link: "index.html" },
  { name: "About", link: "about.html" },
  { name: "Events", link: "events.html" },
  { name: "Gallery", link: "gallery.html" },
  { name: "Feedback", link: "feedback.html" },
  { name: "Contact", link: "contact.html" }
];

const navLinks = document.getElementById("nav-links");


pages.forEach(page => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = page.link;
  a.textContent = page.name;
  li.appendChild(a);
  navLinks.appendChild(li);
});


const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
