import {
  state,
  ubahFilter
} from './state.js';

import {
  render,
  tandaiTombolAktif
} from './dom.js';

// Memasang seluruh pendengar peristiwa
export function pasangPendengar() {

  const barisFilter =
    document.querySelector(".filter") ||
    document.querySelector("#filter");

  const formReview =
    document.querySelector("#bagian-2 form");

  // EVENT 1: Filter film
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      const nilai =
        (tombol.dataset.filter ||
        tombol.dataset.kategori ||
        "semua").toLowerCase();

      ubahFilter(nilai);
      tandaiTombolAktif(state);
    });
  }

  // EVENT 2: Form tambah film
  if (formReview) {
    formReview.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputJudul =
        document.querySelector("#nama-kolom1") ||
        document.querySelector("#namaFilm");

      const inputGenre =
        document.querySelector("#nama-kolom2") ||
        document.querySelector("#genre");

      const inputTahun =
        document.querySelector("#tahun") ||
        document.querySelector("#nama-kolom3");

      const inputRating =
        document.querySelector("#rating") ||
        document.querySelector("#nama-kolom4");

      const judul = inputJudul ? inputJudul.value.trim() : "";
      const genre = inputGenre ? inputGenre.value.trim() : "Umum";
      const tahun = inputTahun ? Number(inputTahun.value) : new Date().getFullYear();
      const rating = inputRating ? Number(inputRating.value) : 9;

      if (!judul) {
        alert("Judul film tidak boleh kosong!");
        return;
      }

      // Mengikuti perilaku kode lama P10:
      // form di-reset setelah submit
      formReview.reset();
    });
  }
}