let selectedGame = "hardware";

const cards = document.querySelectorAll(".card");
const startBtn = document.querySelector(".primary");
const guideBtn = document.querySelector(".secondary");

// === PILIH GAME ===
cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    selectedGame = card.dataset.game;
  });
});

// === MULAI GAME ===
if (startBtn) {
  startBtn.addEventListener("click", () => {
    if (selectedGame === "hardware") {
      window.location.href = "Hardware.html";
    } else {
      window.location.href = "Fungsi.html";
    }
  });
}

// === PETUNJUK ===
if (guideBtn) {
  guideBtn.addEventListener("click", () => {
    showGuide();
  });
}

function showGuide() {
  const existingModal = document.querySelector(".modal");

  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");

  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <h2>Petunjuk Game</h2>

      <p>
        1. Pilih jenis game terlebih dahulu.<br><br>
        2. Klik gambar hardware.<br><br>
        3. Cocokkan dengan nama yang benar.<br><br>
        4. Jawaban benar akan menambah skor.
      </p>

      <button onclick="this.parentElement.parentElement.remove()">
        Tutup
      </button>
    </div>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  document.body.appendChild(modal);
}

// === LOGIN ADMIN ===
function loginAdmin() {
  const username = prompt("Masukkan Username");
  const password = prompt("Masukkan Password");

  if (username === "admin" && password === "123") {
    window.location.href = "admin.html";
  } else {
    alert("Username atau Password salah!");
  }
}
