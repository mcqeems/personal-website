'use client';

import { useState } from 'react';
import { playSound } from '@/lib/sound-effects';

interface CardProps {
  onOpen: () => void;
}

export default function Card({ onOpen }: CardProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      playSound('card-open');
      setIsOpening(true);
      setTimeout(onOpen, 600);
    }
  };

  return (
    <div className="perspective">
      <div
        className="relative md:w-80 w-72 h-96 cursor-pointer transform transition-transform hover:scale-105"
        onClick={handleClick}
        style={{
          transformStyle: 'preserve-3d' as any,
        }}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center p-8 text-white text-center"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: isOpening ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-out',
          }}
        >
          <div className="space-y-4">
            <div className="text-6xl">🎉</div>
            <h2 className="text-4xl font-bold">Klik Untuk Membuka</h2>
            <p className="text-lg opacity-90">Baca yaa</p>
          </div>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-8 text-center"
          style={{
            backfaceVisibility: 'hidden' as any,
            transform: isOpening ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform 0.6s ease-out',
          }}
        >
          <div className="space-y-4">
            <div className="text-7xl">✉️</div>
            <h2 className="text-3xl font-bold text-purple-600">Happy Birthday!</h2>
            <p className="text-gray-600">Membuka surat..</p>
          </div>
        </div>
      </div>
    </div>
  );
}
