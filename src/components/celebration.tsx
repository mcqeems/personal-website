'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
}

export default function Celebration() {
  const [fireworks, setFireworks] = useState<Particle[]>([]);
  const [confetti, setConfetti] = useState<Particle[]>([]);
  const [particleId, setParticleId] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const createFireworks = () => {
      const newFireworks = Array.from({ length: 8 }, (_, i) => ({
        id: particleId + i,
        x: Math.random() * 100,
        y: Math.random() * 40 + 20,
        angle: (Math.PI * 2 * i) / 8,
        velocity: 2 + Math.random() * 2,
      }));
      setFireworks((prev) => [...prev, ...newFireworks]);
      setParticleId((prev) => prev + 8);
    };

    const createConfetti = () => {
      const newConfetti = Array.from({ length: 20 }, (_, i) => ({
        id: particleId + i,
        x: Math.random() * 100,
        y: -10,
        angle: Math.random() * Math.PI * 2,
        velocity: 1 + Math.random() * 2,
      }));
      setConfetti((prev) => [...prev, ...newConfetti]);
      setParticleId((prev) => prev + 20);
    };

    const fireworkInterval = setInterval(createFireworks, 600);
    const confettiInterval = setInterval(createConfetti, 400);

    return () => {
      clearInterval(fireworkInterval);
      clearInterval(confettiInterval);
    };
  }, [particleId]);

  return (
    <div className="relative w-full h-full py-8 overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center">
      {/* Fireworks */}
      <audio autoPlay loop>
        <source src="./sound/birthday-song.mp3"></source>
      </audio>
      <div className="absolute inset-0 pointer-events-none">
        {fireworks.map((fw) => (
          <div
            key={fw.id}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full float-up"
            style={
              {
                left: `${fw.x}%`,
                top: `${fw.y}%`,
                '--tx': `${Math.cos(fw.angle) * 150}px`,
                '--ty': `${Math.sin(fw.angle) * 150}px`,
              } as any
            }
          />
        ))}
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((conf) => (
          <div
            key={conf.id}
            className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded confetti"
            style={{
              left: `${conf.x}%`,
              top: `${conf.y}%`,
              animation: `confetti-fall ${2 + Math.random() * 1}s linear forwards`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="md:text-7xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 animate-bounce">
            HAPPY BIRTHDAY!
          </h1>
          <p className="md:text-3xl text-2xl font-semibold text-gray-700">Elfarida Salsabila Putri</p>
          <p className="md:text-2xl text-xl font-semibold text-gray-500">19 Years Old</p>
        </div>

        {/* Cake with Candles */}
        <div className="flex justify-center items-end gap-12 my-12 py-4">
          <div
            className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: '1000px' }}
          >
            <div
              className="relative transition-transform duration-700"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front Image */}
              <Image
                className="rounded-lg shadow-lg"
                src="/troll/birthday-girl.png"
                alt="elfa"
                width={300}
                height={300}
                style={{
                  backfaceVisibility: 'hidden',
                }}
              />
              {/* Back Image */}
              <Image
                className="rounded-lg shadow-lg absolute top-0 left-0 bg-white/50"
                src="/troll/flea.webp"
                alt="elfa flipped"
                width={300}
                height={300}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              />
            </div>
            {/* Pointer Icon Indicator */}
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg animate-bounce flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-800">Click me</span>
            </div>
          </div>
        </div>

        {/* Cake */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Cake Base */}
            <div className="w-full h-full py-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg border-4 border-amber-300 shadow-xl flex flex-col items-center justify-center gap-2">
              <div className="text-6xl">🍩</div>
              <div className="text-lg text-stone-800">
                Itu gambarnya asal comot highlight aja yak jadi jgn heran wkwkwk. But look there&apos;s a donut!
              </div>
            </div>
          </div>
        </div>

        {/* Wish Message */}
        <div className="bg-white bg-opacity-80 backdrop-blur rounded-2xl p-8 w-full shadow-lg">
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">
            Semoga semua yang disemoga tersemogakan 🤲
          </p>
        </div>
      </div>
    </div>
  );
}
