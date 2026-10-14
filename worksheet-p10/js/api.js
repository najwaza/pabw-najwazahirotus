const ALAMAT = 'http://127.0.0.1:5500/data.json';

async function muat() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  console.log('Content-Type:', respons.headers.get('content-type'));
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}

muat().then(data => console.log(data));

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}
