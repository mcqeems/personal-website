'use client';

import { useState } from 'react';
import { playSound } from '@/lib/sound-effects';

interface BirthdayCardProps {
  onCelebrate: () => void;
}

export default function BirthdayCard({ onCelebrate }: BirthdayCardProps) {
  const [candleBlown, setCandleBlown] = useState(false);
  const [blowParticles, setBlowParticles] = useState<Array<{ id: number; x: number; y: number; angle: number }>>([]);

  const handleBlowCandle = () => {
    if (candleBlown) {
      onCelebrate();
      return;
    }

    playSound('candle-blow');
    setCandleBlown(true);

    // Create blow particles
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50,
      y: 30,
      angle: (Math.PI * 2 * i) / 12,
    }));
    setBlowParticles(particles);

    // Auto proceed to celebration after animation
    setTimeout(() => {
      onCelebrate();
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 md:mt-4 mt-8">
      {/* Birthday Person Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 md:mb-0 mb-8">
        {/* Image Section */}
        <div className="w-full md:h-80 h-52 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center relative overflow-hidden">
          <div className="text-9xl animate-bounce">🎉</div>
          <div className="absolute inset-0 opacity-30 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              It&apos;s Your Special Day!
            </h2>
            <p className="text-lg text-gray-600 font-semibold">Sebelum tiup lilin buat harapan dan do&apos;a yaa...</p>
          </div>

          {/* Candle Display */}
          <div className="flex justify-center py-8">
            <div className="relative w-20 h-40 flex flex-col items-center">
              {/* Candle with animation */}
              <div className="relative w-full h-full">
                {/* Flame */}
                {!candleBlown && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 animate-pulse">
                    <div className="w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-300 rounded-full shadow-lg blur-sm candle-flicker"></div>
                  </div>
                )}

                {/* Candle stick */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-32 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-full shadow-md"></div>

                {/* Smoke particles when blown */}
                {candleBlown &&
                  blowParticles.map((particle) => (
                    <div
                      key={particle.id}
                      className="absolute w-2 h-2 bg-gray-400 rounded-full float-up"
                      style={
                        {
                          left: `${particle.x}%`,
                          top: `${particle.y}%`,
                          '--tx': `${Math.cos(particle.angle) * 100}px`,
                          '--ty': `${Math.sin(particle.angle) * 100}px`,
                        } as any
                      }
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Blow Button */}
          <button
            onClick={handleBlowCandle}
            className={`w-full py-4 px-6 font-bold text-lg rounded-xl transition-all transform hover:scale-105 ${
              candleBlown
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-xl animate-pulse'
            }`}
          >
            {candleBlown ? 'Mantapp!!' : 'Tiup Lilinnya!'}
          </button>
        </div>
      </div>

      {/* Encouragement Text */}
      {!candleBlown && (
        <p className="text-center text-gray-600 font-medium text-sm max-w-sm mb-4">
          Buat harapan, klik tombol dan lihat!
        </p>
      )}
    </div>
  );
}
