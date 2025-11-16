'use client';

import { useState, useEffect } from 'react';

interface LetterProps {
  onRead: () => void;
}

export default function Letter({ onRead }: LetterProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const fullText =
    'Halo el,\n\nyaa ini dia surprisenya wkwkwkw, ya nggak fancy-fancy amat yaa. Cuman bisa ngoding soalnya wkwkwk.\nNggak kerasa udah 19 tahun aja ye, ntah kenapa walaupun baru kenal sekitar sebulan tapi deketnya udah kayak kenal dari lama hehe.\n\nTerimakasih sudah mendengar segala keluh kesah aku selama ini. dan tetap semangat walau nggak ngapa-ngapain ya wkwkwk.\n\nYa intinya selamat ulang tahun yang ke 19 di tanggal 19 ini waw spesial banget nih ulang tahunnya.\n\nSincerely,\nYour Friend mcqeems 👍';

  useEffect(() => {
    if (isOpen) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <div className="md:w-96 w-72 perspective">
      <div
        className="relative w-full bg-yellow-50 border-4 border-yellow-100 rounded-lg shadow-2xl p-8 text-center transform transition-transform hover:scale-105"
        style={{
          transformStyle: 'preserve-3d' as any,
          transform: isOpen ? 'rotateX(5deg)' : 'rotateX(0deg)',
        }}
      >
        <div className="absolute md:top-4 top-1 right-1 text-3xl">✉️</div>

        <h3 className="text-2xl font-bold text-pink-600 mb-6">Surat dari Atmin</h3>

        <div className="min-h-64 text-gray-700 text-base leading-relaxed font-serif whitespace-pre-wrap">
          {displayedText}
          {displayedText.length < fullText.length && (
            <>
              <span className="animate-pulse text-pink-500">▌</span>
              <audio autoPlay loop>
                <source src="./sound/whatsapp-typing.mp3" type="audio/mpeg"></source>
              </audio>
            </>
          )}
        </div>

        {displayedText.length === fullText.length && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRead();
            }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Lanjut ➡️
          </button>
        )}
      </div>
    </div>
  );
}
