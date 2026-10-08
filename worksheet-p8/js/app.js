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
  julahProyek: 3,
};


console.log(profil);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


