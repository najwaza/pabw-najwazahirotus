// Data mentah profil
export const profil = {
  nama: "Najwa Zahirotus Shofa",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

// Fungsi murni untuk membuat perkenalan
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi murni untuk memformat keahlian
export const formatKeahlian = (daftar) => daftar.join(" · ");