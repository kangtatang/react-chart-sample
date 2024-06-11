# Stock Management System

!["tampilan Aplikasi"](https://lh3.googleusercontent.com/pw/AP1GczNltWASkeQ33eQXgfQEKEcOE4ez7IXRuJP5sgftBXvSJl62JVtYVHZwgZw_4YysVXr2US9szxjAu5JDcBflPzy4NQxDfOLBY-S4SHvatW8wWnwPhryo8L4UbNunos0uKBLl0NFifdjGb5onRHqUDBNT=w1597-h777-s-no-gm?authuser=0)

!['Manajemen Data'](https://lh3.googleusercontent.com/pw/AP1GczMC-fHouZQF_mNB1nUYgnF-jIaPhozXyp_6hbZMFbEflyr1U9bYEkaEunFcO03eoQdYKfotUaF6wLBS1yf20SOl4L_dIDIeF_eLC-eUAps4KYdFiDT0pWHd8ZVu-H4q5bi_4uNzAtzsGegODbdgHPB5=w1599-h782-s-no-gm?authuser=0)

## Deskripsi Aplikasi

Aplikasi Stock Management System adalah aplikasi web sederhana yang dibuat untuk bahan pembelajaran dalam menggunakan crud pada react JS dan menampilkan data pada bar chart menggunakan react-reactjs-2. Aplikasi ini memungkinkan pengguna untuk menambah, mengedit, dan menghapus data stok. Selain itu, aplikasi ini juga menyediakan fitur pencarian untuk memudahkan pengguna dalam mengelola data.

## Fitur Utama

- **Tambah Data Stok**: Memungkinkan pengguna untuk menambahkan data stok baru.
- **Edit Data Stok**: Pengguna dapat mengedit informasi stok yang sudah ada.
- **Hapus Data Stok**: Menghapus data stok dari sistem.
- **Pencarian**: Mencari data stok berdasarkan parameter tertentu.
- **Notifikasi**: Menampilkan notifikasi saat data berhasil ditambahkan, diubah, atau dihapus.

## TODO

- **Pagination**: Navigasi halaman untuk data stok.
- **Sorting**: Mengurutkan data stok berdasarkan kolom tertentu.
- **Filtering**: Menampilkan data berdasarkan parameter tertentu.
- **Export Data**: export data ke format tertentu sebagai laporan.
- **UI**: Menggunakan library UI seperti material UI, shadcn atau react-bootstrap untuk tampilan.

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun user interface.
- **React Router**: Library untuk navigasi antar halaman di aplikasi React.
- **Axios**: Library untuk melakukan HTTP requests.
- **react-toastify**: Library untuk menampilkan notifikasi.
- **json-server**: Library untuk membuat server dummy.
- **react-chartjs-2**: Library untuk membuat chart.
- **Formik**: Library untuk validasi form.
- **yup**: Library untuk validasi form.

## Cara Instalasi

Untuk menjalankan aplikasi ini di lokal Anda, ikuti langkah-langkah berikut:

1. **Clone Repository**
2. **Instalasi Dependencies** `npm install`
3. **Jalankan Server** `json-server --watch data.json --port 3009` (install terlebih dahulu json-server jika belum `npm install -g json-server`)
4. **Jalankan Aplikasi** `npm run start`

Server berjalan di `http://localhost:3009/stocks`
Aplikasi akan berjalan di `http://localhost:3000`.

## Lisensi

Aplikasi ini dilisensikan di bawah MIT License.
