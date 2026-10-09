const nama = "Najwa";
const jumlahProyek = 3;

let pilihanAktif = "semua";

pilihanAktif = "selesai";

console.log(nama);
console.log(jumlahProyek);
console.log(pilihanAktif);

console.log(typeof nama);
console.log(typeof jumlahProyek);
console.log(typeof pilihanAktif);

const profil = {
  nama: "Najwa Zahirotus",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};


console.log(profil);
console.log(profil.nama);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

export const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];
//untuk menentukan code apa yang akan dipakai, bertanya pada AI

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

const hasil = [1, 2, 3].map((angka) => angka * 2);
console.log(hasil);

const hasil2 = [1, 2, 3].filter((angka) => angka > 1);

console.log(hasil2);

const hasil3 = [1, 2, 3].reduce((total, angka) => total + angka, 0);

console.log(hasil3);

//1. map, 2. filter, 3. find, 4. reduce

const urutanProyek = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

console.table(urutanProyek);
console.table(daftarProyek);

const namaFilm = document.querySelector("#namaFilm");

console.log(namaFilm);

const rating = document.querySelector("#rating");

const hasil5 = Number(9) + 1;
console.log(hasil5);


