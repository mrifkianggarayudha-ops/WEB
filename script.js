let selectedGame = "hardware";

const cards = document.querySelectorAll(".card");
const startBtn = document.querySelector(".primary");
const guideBtn = document.querySelector(".secondary");

/* PILIH GAME */
cards.forEach(card => {

  card.addEventListener("click", () => {

    cards.forEach(c => {
      c.classList.remove("active");
    });

    card.classList.add("active");

    selectedGame = card.dataset.game;

  });

});

/* MULAI GAME */
if (startBtn) {

  startBtn.addEventListener("click", () => {

    if (selectedGame === "hardware") {

      window.location.href = "Hardware.html";

    } else {

      alert("Game fungsi belum tersedia!");

    }

  });

}

/* PETUNJUK */
if (guideBtn) {

  guideBtn.addEventListener("click", () => {

    showGuide();

  });

}

function showGuide() {

  const modal = document.createElement("div");

  modal.classList.add("modal");

  modal.innerHTML = `
  
    <div class="modal-content">

      <h2>Petunjuk</h2>

      <p>
        Pilih jenis game terlebih dahulu.<br><br>
        Klik gambar hardware.<br><br>
        Cocokkan dengan nama yang benar.<br><br>
        Jawaban benar akan menambah skor.
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

/* LOGIN ADMIN */
function loginAdmin() {

  const password = prompt("Masukkan Password Admin");

  if (password === "123") {

    window.location.href = "admin.html";

  } else {

    alert("Password salah!");

  }

}
