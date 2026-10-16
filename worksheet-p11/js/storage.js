const KUNCI = "pabw-p11";
const VERSI = 2;

// Menyimpan pilihan terakhir
export function simpan(state) {
  const isi = {
    versi: VERSI,
    filterAktif: state.filterAktif
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Membaca simpanan sebelumnya
export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);

    if (teks === null) return null;

    return JSON.parse(teks);
  } catch {
    return null;
  }
}

// Menghapus simpanan
export function aturUlang() {
  localStorage.removeItem(KUNCI);
}