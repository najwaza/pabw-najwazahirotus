
// js/state.js

import { profil } from './data.js';
import { render } from './dom.js';
import { simpan} from './storage.js';

// Objek state tunggal
export const state = {
  profil: profil,
  daftarProyek: [],
  filterAktif: "semua",
  sedangMemuat: false,
  galat: null
};

// Fungsi pengubah daftar film
export function ubahDaftarProyek(daftar) {
  state.daftarProyek = daftar;
}

// Fungsi pengubah filter
export function ubahFilter(nilai) {
    console.log("Filter terpanggil", nilai);
  state.filterAktif = nilai;
  simpan(state);
  console.log("HASIL SIMPAN:", localStorage.getItem("pabw-p11"));
  render(state);
}

// Fungsi pengubah status memuat
export function ubahMemuat(nilai) {
  state.sedangMemuat = nilai;
}

// Fungsi pengubah pesan galat
export function ubahGalat(pesan) {
  state.galat = pesan;
}