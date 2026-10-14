import { daftarProyek } from "./app.js";
import { ambilNotisia } from './api.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(data) {
  wadah.replaceChildren();

  if (data.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  data.forEach((proyek) => {
    wadah.append(
        buatKartu(proyek));} 
    );
}


function tandaiTombolAktif(tombolAktif) { 
    document.querySelectorAll("#filter button").forEach((tombol) => { 
        tombol.classList.toggle("aktif", tombol === tombolAktif); }); }

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                 // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

render(daftarProyek);

const form = document.querySelector("#bagian-2 form");
const kolomForm = form.querySelectorAll("input");
const tombolKirim = form.querySelector('button[type="submit"]');

function periksaKolom(kolom) {
  const isi = kolom.value.trim();
  const grup = kolom.closest(".form-kolom");
  const pesan = grup.querySelector(".pesan-galat");
  const sah = isi !== "" && kolom.checkValidity();

  kolom.setAttribute("aria-invalid", String(!sah));
  pesan.hidden = sah;

  return sah;
}

function perbaruiForm(){
    let semuaSah = true;

    kolomForm.forEach((kolom) => {
        const sah = periksaKolom(kolom);

        if (!sah) semuaSah = false;
    });

    tombolKirim.disabled = !semuaSah;
}

kolomForm.forEach((kolom) => {
    kolom.addEventListener("input", perbaruiForm);
});

perbaruiForm();

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    perbaruiForm(); 

    const kolomBermasalah = Array.from(kolomForm).find( 
        (kolom) => !periksaKolom(kolom) ); 
        if (kolomBermasalah) { 
            kolomBermasalah.focus(); return; 
        } alert("Form valid! Semua kolom sudah terisi dengan benar."); });


// D.1 - Menampilkan data dari API

const wadahApi = document.querySelector('#daftar-api');

function gambar(daftar) {
  wadahApi.textContent = '';

  daftar.forEach(function (n) {
    const kartu = document.createElement('article');

    const judul = document.createElement('h3');
    judul.textContent = n.judul;

    kartu.appendChild(judul);
    wadahApi.appendChild(kartu);
  });
}

async function tampilkan() {
  wadahApi.textContent = 'Memuat...';
  await new Promise(resolve => setTimeout(resolve, 3000));

  try {
    const hasil = await ambilNotisia();
    const daftar = hasil.data;

    if (daftar.length === 0) {
      wadahApi.textContent = 'Belum ada notisia';
      return;
    }

    gambar(daftar);

  } catch (galat) {
    wadahApi.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkan();