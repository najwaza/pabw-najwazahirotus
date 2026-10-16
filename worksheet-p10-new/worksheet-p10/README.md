# Worksheet P5 — Layout Modern: Flexbox dan Grid

Najwa Zahirotus Shofa · 25523210

## A.1 Kerangka halaman

| Bagian halaman | Peran | Nilai yang saya pakai |
| --- | --- | --- |
| Baris pertama | Kepala: judul, menu, tombol tema | `auto` |
| Baris kedua | Isi: sidebar (form) dan konten (film) | `1fr` |
| Baris ketiga | Kaki halaman | `auto` |
| Kolom isi | Sidebar tetap, konten lentur | `16rem 1fr` |

```
+--------------------------------------------+
| header  (navbar: judul · menu · tema)      |  auto
+-----------+--------------------------------+
|           | utama  (galeri + tabel)        |
|   sisi    +--------------------------------+  1fr
|  (form)   | bawah  (gambar ilustrasi)      |
+-----------+--------------------------------+
| footer                                     |  auto
+--------------------------------------------+
   16rem                  1fr
```

## A.2 Sumbu dan arah

| Komponen | Arah | Sumbu utama | Sumbu silang |
| --- | --- | --- | --- |
| Navbar (`.navbar`) | baris | horizontal | vertikal |
| Baris tahun + rating pada kartu (`.kartu__kaki`) | baris | horizontal | vertikal |
| Isi kartu (`.kartu__isi`) | kolom | vertikal | horizontal |

## A.3 Flex atau grid

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| Kepala halaman | flex | Judul, menu, dan tombol hanya berderet satu arah. |
| Isi dua kolom | grid | Ada kolom dan baris sekaligus, plus penempatan area bernama. |
| Galeri kartu | grid | Jumlah kolom otomatis lewat `repeat(auto-fit, minmax())`. |
| Isi di dalam satu kartu | flex | Judul, info, dan kaki hanya berderet ke bawah. |

## D.3 Penempatan

| Blok | Cara | Potongan kode |
| --- | --- | --- |
| Form (sidebar) | area bernama | `.sisi { grid-area: sisi; }` |
| Daftar film dan ilustrasi | area bernama | `.utama { grid-area: utama; }` `.bawah { grid-area: bawah; }` |

## E. Kasus yang ditangani

- Tinggi kartu seragam: `.galeri .kartu { display: grid; align-content: start; min-height: 14rem; }`
- Isi panjang: `min-width: 0` pada `.isi > *` dan `.kartu__isi`, `overflow-wrap: anywhere` pada `.kartu__judul`.
- Meluber: kotak centang tema yang tersembunyi ikut aturan `width: 100%` milik `input` sehingga halaman
  bergeser 16 px; diperbaiki dengan `width: 1px; height: 1px` pada `.pengalih-tema`.

## F.1 Pemeriksaan

| Periksa | Hasil |
| --- | --- |
| Kerangka halaman: tiga baris | Lolos (`.page` = `auto 1fr auto`) |
| Jarak memakai gap | Lolos (kata `margin` tidak ada di layout.css dan komponen.css) |
| Lebar memakai fr atau rem | Lolos (tidak ada px pada lebar kolom) |
| Galeri adaptif tanpa media query | Lolos (1 kolom di 360 px, 3 di 768 px, 4 di 1280 px) |
| Tidak meluber | Lolos di 320, 360, 768, dan 1280 px |
| Tema gelap Pertemuan 4 | Lolos (tombol pengalih bekerja) |
