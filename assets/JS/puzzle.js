const openBtn = document.getElementById("openPuzzleBtn");
const puzzlePopup = document.getElementById("puzzlePopup");
const formPopup = document.getElementById("formPopup");
const closeBtn = document.getElementById("closePopup");
const puzzle = document.getElementById("puzzle");
const completedMsg = document.getElementById("completed");
const scholarshipForm = document.getElementById("scholarshipForm");
let dragged;

// Open puzzle popup
openBtn.onclick = () => {
  puzzlePopup.style.display = "flex";
  initPuzzle();
};

// Close popup
closeBtn.onclick = () => {
  puzzlePopup.style.display = "none";
};

// Puzzle logic
function initPuzzle() {
  puzzle.innerHTML = "";
  completedMsg.style.display = "none";
  let pieces = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let piece = document.createElement("div");
      piece.classList.add("piece");
      piece.style.backgroundPosition = -${col * 100}px -${row * 100}px;
      piece.setAttribute("data-pos", row + "-" + col);
      piece.draggable = true;
      pieces.push(piece);
    }
  }
  // Shuffle pieces
  pieces.sort(() => Math.random() - 0.5);
  pieces.forEach(piece => puzzle.appendChild(piece));

  // Drag events
  puzzle.addEventListener("dragstart", e => { dragged = e.target; });
  puzzle.addEventListener("dragover", e => e.preventDefault());
  puzzle.addEventListener("drop", e => {
    if (e.target.classList.contains("piece")) {
      let temp = document.createElement("div");
      puzzle.replaceChild(temp, dragged);
      puzzle.replaceChild(dragged, e.target);
      puzzle.replaceChild(e.target, temp);
      checkSolved();
    }
  });
}

function checkSolved() {
  const current = [...puzzle.children];
  let solved = current.every((piece, index) => {
    let row = Math.floor(index / 3);
    let col = index % 3;
    return piece.getAttribute("data-pos") === row + "-" + col;
  });

  if (solved) {
    completedMsg.style.display = "block";

    // Show form only after puzzle is solved
    setTimeout(() => {
      puzzlePopup.style.display = "none";
      formPopup.style.display = "flex";
    }, 1500);
  }
}

// Form submit
scholarshipForm.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  formPopup.style.display = "none";
  alert(Thankyou ${name}! 🎉 We will contact you soon at ${email}.);
});