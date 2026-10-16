
export const profil = {
  nama: "Najwa Zahirotus",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

// Fungsi untuk menyusun kalimat perkenalan
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi untuk merapikan daftar keahlian
export const formatKeahlian = (daftar) => daftar.join(" · ");

// Data mentah proyek
export const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Katalog Produk",
    tahun: 2026,
    selesai: false,
    kategori: "data",
  },
];
