// js/dom.js

const wadah = document.querySelector(".galeri.grid") || document.querySelector("#daftar-api") || document.querySelector("#daftar");
const pesanKosong = document.querySelector(".pesan-kosong") || document.querySelector("#pesan-kosong");
const muatEl = document.querySelector(".muatg");
const barisFilter = document.querySelector(".filter") || document.querySelector("#filter");
const formReview = document.querySelector("#bagian-2 form");

// 1. Indikator Keadaan Memuat (Loading State)
export function aturMemuat(aktif) {
  if (muatEl) {
    muatEl.hidden = !aktif;
  }
}

// 2. Indikator Keadaan Galat (Error State)
export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

// 3. Pembuat Elemen Kartu Film (Menampilkan Tahun)
function buatKartu(proyek) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  const figcaption = document.createElement("figcaption");
  figcaption.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = proyek.judul;

  const info = document.createElement("p");
  info.style.margin = "6px 0 0 0";
  info.style.fontSize = "0.9em";
  info.style.color = "#555";
  info.textContent = `Genre: ${proyek.genre || "Umum"} · Tahun: ${proyek.tahun || "-"} · Rating: ${proyek.rating || 0}/10`;

  figcaption.append(h3, info);
  figure.append(figcaption);
  return figure;
}

// 4. Penggambar Utama (Render Data)
export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = "";

  const listData = Array.isArray(daftar) ? daftar : (daftar && daftar.data ? daftar.data : []);

  if (!listData || listData.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada film favorit yang sesuai.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  listData.forEach((proyek) => {
    const kartu = buatKartu(proyek);
    wadah.append(kartu);
  });
}

// 5. Penanda Tombol Aktif Filter
function tandaiTombolAktif(tombolAktif) {
  if (!barisFilter) return;
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// 6. Filter Fleksibel (Bisa berdasarkan Genre atau Tahun)
export function pasangFilter(daftar) {
  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const filterVal = (tombol.dataset.filter || tombol.dataset.kategori || "semua").toLowerCase();
    const listData = Array.isArray(daftar) ? daftar : (daftar.data || []);

    const terpilih = listData.filter((proyek) => {
      if (filterVal === "semua") return true;

      const genreMatch = (proyek.genre || "").toLowerCase() === filterVal;
      const tahunMatch = String(proyek.tahun) === filterVal;

      return genreMatch || tahunMatch;
    });

    tandaiTombolAktif(tombol);
    render(terpilih);
  });
}

// 7. Form Tambah Film (Memuat Input Tahun)
export function pasangFormReview(daftar) {
  if (!formReview) return;

  const inputJudul = document.querySelector("#nama-kolom1") || document.querySelector("#namaFilm");
  const inputGenre = document.querySelector("#nama-kolom2") || document.querySelector("#genre");
  const inputTahun = document.querySelector("#tahun") || document.querySelector("#nama-kolom3");
  const inputRating = document.querySelector("#rating") || document.querySelector("#nama-kolom4");

  formReview.addEventListener("submit", (event) => {
    event.preventDefault();

    const judul = inputJudul ? inputJudul.value.trim() : "";
    const genre = inputGenre ? inputGenre.value.trim() : "Umum";
    const tahun = inputTahun ? Number(inputTahun.value) : new Date().getFullYear();
    const rating = inputRating ? Number(inputRating.value) : 9;

    if (!judul) {
      alert("Judul film tidak boleh kosong!");
      return;
    }

    const filmBaru = {
      id: Date.now(),
      judul: judul,
      genre: genre,
      tahun: tahun,
      rating: rating
    };

    // const listData = Array.isArray(daftar) ? daftar : (daftar.data || []);
    // listData.push(filmBaru);

    // render(listData);
    formReview.reset();
  });
}