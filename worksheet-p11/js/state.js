import { daftarProyek } from "./data.js";
 export const state = {
    daftarProyek: [...daftarProyek],
    pilihanAktif: "semua",
    pencarian: "",
 };

 export function ubahPilihanAktif(pilihan) {
    state.pilihanAktif = pilihan;
 }

 export function ubahPencarian(teks) {
    state.pencarian = teks;
 }

 export function ubahDaftarProyek(dataBaru) {
    state.daftarProyek = dataBaru;
 }