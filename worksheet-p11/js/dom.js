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
  info.textContent = `Sutradara: ${proyek.sutradara || "-"} · Genre: ${proyek.genre || "Umum"} · Tahun: ${proyek.tahun || "-"} · Rating: ${proyek.rating || 0}/10`;
  figcaption.append(h3, info);
  figure.append(figcaption);
  return figure;
}
function saring(state){
  const daftar = state.daftarProyek;
  const kategori = state.filterAktif;

  return daftar.filter((proyek) => {
    if (kategori === "semua") return true;
    const genreMatch = (proyek.genre || "").toLowerCase() === kategori;
    const tahunMatch = (proyek.tahun || "") === kategori;

    return genreMatch || tahunMatch;
  });
}
// 4. Penggambar Utama (Render Data)
export function render(daftar) {
 if (!wadah) return;

  // 1. Kosongkan wadah
  wadah.textContent = "";

  // Ambil hasil penyaringan dari state
  const tampil = saring(state);

  // 2. Periksa keadaan kosong
  if (tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent =
        "Belum ada film favorit yang sesuai.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  // 3. Isi ulang wadah
  tampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// 5. Penanda Tombol Aktif Filter
export function tandaiTombolAktif(tombolAktif) {
  if (!barisFilter) return;
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const nilai = (
      tombol.dataset.filter ||
      tombol.dataset.kategori ||
      "semua"
    ).toLowerCase();
    tombol.classList.toggle(
      "aktif", 
      nilai === state.filterAktif);
  });
}

