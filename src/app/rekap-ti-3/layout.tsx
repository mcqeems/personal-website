import type { Metadata } from 'next';

// --- SEMUA METADATA PINDAHKAN KE SINI ---
export const metadata: Metadata = {
  // Judul utama yang akan muncul di tab browser dan hasil pencarian
  title: 'Rekapitulasi IPK Mahasiswa TI Semester 3',

  // Deskripsi singkat (muncul di bawah judul pada hasil pencarian)
  description:
    'Daftar rekapitulasi Indeks Prestasi Kumulatif (IPK) mahasiswa Teknik Informatika selama tiga semester pertama.',

  // Kata kunci untuk membantu mesin pencari memahami konten halaman
  keywords: ['IPK', 'Rekapitulasi Nilai', 'Teknik Informatika', 'Mahasiswa', 'Semester 3'],

  // --- Open Graph (untuk Facebook, LinkedIn, Discord, dll.) ---
  openGraph: {
    title: 'Rekapitulasi IPK Mahasiswa TI Semester 3',
    description: 'Lihat daftar rekapitulasi IPK mahasiswa Teknik Informatika selama tiga semester awal di sini.',
    // Pastikan path gambar ini benar dan file ada di folder /public
    images: [
      {
        url: '/troll/download.jpeg',
        width: 1200,
        height: 630,
        alt: 'Grafik IPK Mahasiswa Teknik Informatika',
      },
    ],
    url: 'https://qeem.site/rekap-ti-3',
    siteName: 'Website Akademik TI',
    type: 'website',
    locale: 'id_ID',
  },

  // --- Twitter Cards (agar tampilan di Twitter lebih menarik) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Rekapitulasi IPK Mahasiswa TI Semester 3',
    description: 'Lihat daftar rekapitulasi IPK mahasiswa Teknik Informatika selama tiga semester awal di sini.',
    // Pastikan path gambar Twitter sama dan benar
    images: ['/troll/download.jpeg'],
  },

  // --- Metadata Tambahan ---
  robots: 'index, follow',
  authors: [{ name: 'fufufafa' }],
};

// Layout ini akan membungkus page.tsx
export default function RekapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
