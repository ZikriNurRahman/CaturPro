/** @type {import('tailwindcss').Config} */
module.exports = {
  // Arahkan Tailwind untuk membaca semua file di folder app, features, dan shared
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
    "./shared/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Warna papan catur
        board: {
          light: '#F0D9B5', // Kotak terang
          dark:  '#B58863', // Kotak gelap
        },
        // Warna identitas brand aplikasi (CaturPro)
        brand: {
          primary: '#1B4F72', // Biru navy elegan untuk tombol utama
          accent:  '#2ECC71', // Hijau untuk jawaban benar/sukses
          danger:  '#E74C3C', // Merah untuk jawaban salah/error
        }
      },
    }
  },
  plugins: []
}