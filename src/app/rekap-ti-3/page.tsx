'use client';

import { useRef, useState } from 'react';

// --- KOMPONEN HALAMAN (TANPA METADATA) ---
function RekapIpkPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="https://www.myinstants.com/media/sounds/hidup-jokowi.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>

      <main className="w-full flex justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Rekapitulasi IPK Teknik Informatika</h1>
          {isPlaying ? (
            <img
              src="https://i.pinimg.com/236x/59/27/3f/59273fd2918b801b34d69fd03d42a03f.jpg"
              alt="Ilustrasi mahasiswa sedang belajar"
              className="h-[500px] w-[500px]"
            />
          ) : null}

          <button onClick={handlePlayPause} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {isPlaying ? 'LOLOLOLOLOLOLOL' : 'Buka Rekapitulasi'}
          </button>
        </div>
      </main>
    </>
  );
}

export default RekapIpkPage;
