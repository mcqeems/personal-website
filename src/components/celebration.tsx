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
              delay: `${Math.random() * 0.2}s`,
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
          <p className="md:text-3xl text-2xl font-semibold text-gray-700">Barakallah fi umrik!</p>
        </div>

        {/* Cake with Candles */}
        <div className="flex justify-center items-end gap-12 my-12 py-4">
          <Image
            className="rounded-lg shadow-lg"
            src="/troll/birthday-girl.png"
            alt="elfa"
            width={300}
            height={300}
          ></Image>
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
