import { ambilNotisia } from './api.js';

import {
  profil,
  buatPerkenalan,
  formatKeahlian
} from './data.js';

import {
  state,
  ubahDaftarProyek,
  ubahMemuat,
  ubahGalat
} from './state.js';

import { render, aturMemuat, tampilkanGalat } from './dom.js';
import { pasangPendengar } from './events.js';

// Menjalankan aplikasi
async function muatAplikasi() {
  ubahMemuat(true);
  aturMemuat(true);

  try {
    const dataAwal = await ambilNotisia();

    const daftar = Array.isArray(dataAwal)
      ? dataAwal
      : (dataAwal.data || []);

    ubahDaftarProyek(daftar);

    console.log(buatPerkenalan(profil));
    console.log(formatKeahlian(profil.keahlian));

    window.daftar = state.daftarProyek;

    pasangPendengar();
    render(state);

  } catch (galat) {
    ubahGalat(galat.message);
    tampilkanGalat('Gagal memuat data: ' + galat.message);
    console.error('Galat ditangkap di app.js:', galat.message);

  } finally {
    ubahMemuat(false);
    aturMemuat(false);
  }
}

muatAplikasi();