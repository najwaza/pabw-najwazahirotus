// js/app.js

import { ambilNotisia } from './api.js';
import { render, pasangFilter, pasangFormReview, aturMemuat, tampilkanGalat } from './dom.js';

// --- Profil & Identitas Diri ---
const profil = {
  nama: "Najwa Zahirotus Shofa",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// --- Perakit Utama Aplikasi (Orchestrator) ---
async function muatAplikasi() {
  aturMemuat(true);
  try {
    const dataAwal = await ambilNotisia();

    // Memastikan daftar adalah Array langsung
    const daftar = Array.isArray(dataAwal) ? dataAwal : (dataAwal.data || []);

    // Memudahkan pengujian di Console DevTools
    window.daftar = daftar;

    // Pasang fungsi penanganan UI
    pasangFilter(daftar);
    pasangFormReview(daftar);

    // Tampilkan data ke layar
    render(daftar);

  } catch (galat) {
    tampilkanGalat('Gagal memuat data: ' + galat.message);
    console.error('Galat ditangkap di app.js:', galat.message);
  } finally {
    aturMemuat(false);
  }
}

muatAplikasi();