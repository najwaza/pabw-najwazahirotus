// Memanggil data.json yang sejajar dengan profil.html
const ALAMAT = 'data.json'; 

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    
    const hasil = await respons.json();
    
    // Jika data.json kamu dibungkus dalam properti "data"
    return Array.isArray(hasil) ? hasil : (hasil.data || []);
  } catch (galat) {
    console.error('gagal memuat:', galat.message);
    throw galat;
  }
}