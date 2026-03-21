"use client";

import { useState, useEffect, useRef } from "react";
import { useWebHaptics } from "web-haptics/react";
import { defaultPatterns } from "web-haptics";

export default function EidMubarak() {
  const [name, setName] = useState<string>("");
  const [isForgiven, setIsForgiven] = useState<boolean>(false);
  const [noCount, setNoCount] = useState<number>(0);
  const hasPrompted = useRef<boolean>(false);

  const { trigger } = useWebHaptics();

  useEffect(() => {
    if (!hasPrompted.current) {
      const userName = window.prompt("Halo abang ganteng/kakak cantik namanya siapa?") || "Bre";
      setName(userName);
      hasPrompted.current = true;
    }
  }, []);

  const getNoButtonText = () => {
    const phrases = [
      "Nggak",
      "Kepencet kan itu?",
      "Yakin??",
      "Ini idul fitri looh",
      "Ayo dongg....😭😭",
      "Plissssss klik tombol ijo ajaa",
      "Dhomirnya dong dipake 😭😭",
      "Parah lu",
      "Mau thr nggak sih?",
      "😭😭😭😭😭😭😭",
      "MAAFIN NGGAK!",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getImage = () => {
    const images = [
      "https://media.tenor.com/U7I0Im2L2Y0AAAAj/cat-smile-smiling-cat.gif",
      "https://media.tenor.com/AYMpLIY7OQcAAAAi/cat-meme.gif",
      "https://media.tenor.com/SuVGs-GL7RoAAAAi/shocked-shocked-cat.gif",
      "https://media.tenor.com/Jz0hI2sWIBIAAAAj/cat-crying-cat-crying-meme.gif",
      "https://media.tenor.com/GuUzkEo2v1kAAAAi/jimmy.gif",
      "https://media1.tenor.com/m/MT_m5VBtBWwAAAAC/cursed-images-suffering.gif",
      "https://media.tenor.com/VXY0JymhPcIAAAAi/cry.gif",
      "https://media1.tenor.com/m/YKf1w0C8nAwAAAAC/tuff-baby-prabowo.gif",
      "https://media1.tenor.com/m/ZyqhFIPi2OgAAAAC/cat-crying-cat.gif",
      "https://media1.tenor.com/m/AWc3nkl0eCQAAAAC/cry.gif",
      "https://media.tenor.com/RoAvdRrCARUAAAAi/pepe-punch-fight-pepe.gif",
    ];
    return images[Math.min(noCount, images.length - 1)];
  };

  const playSoundEffect = (type: "buzz" | "error") => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const playTone = (frequency: number, startTime: number, duration: number, volume: number) => {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // "square" or "triangle" type makes it sound louder and more like a real haptic motor than "sine"
      oscillator.type = "square";
      oscillator.frequency.value = frequency;

      gainNode.gain.setValueAtTime(volume, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    if (type === "buzz") {
      // 1000ms duration, loop 8 times to match the rapid haptic vibration
      for (let i = 0; i < 8; i++) {
        // 80ms tone every 125ms, high volume (1.5)
        playTone(150, audioCtx.currentTime + i * 0.125, 0.08, 1.5);
      }
    } else if (type === "error") {
      // 40ms duration
      playTone(200, audioCtx.currentTime, 0.04, 1.5);
      // delay 40, duration 40
      playTone(180, audioCtx.currentTime + 0.08, 0.04, 1.5);
      // delay 40, duration 40
      playTone(150, audioCtx.currentTime + 0.16, 0.04, 2.0);
      // delay 40, duration 50
      playTone(120, audioCtx.currentTime + 0.25, 0.05, 1.5);
    }
  };

  const handleNoClick = () => {
    trigger(defaultPatterns.error);
    playSoundEffect("error");
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    trigger(defaultPatterns.buzz);
    playSoundEffect("buzz");
    setIsForgiven(true);
  };

  if (isForgiven) {
    return (
      <div className="flex flex-col items-center min-h-screen p-4 text-center bg-background">
        <img
          src="https://media.tenor.com/ECATiSXWwm8AAAAi/dancing-cat-cat.gif"
          alt="celebration"
          className="md:w-64 md:h-100 w-42 h-80 object-cover mb-8"
        />
        <h1 className="text-2xl font-bold text-green-500 md:mb-4 mb-2 tracking-tighter sm:text-5xl">
          Makasih ya {name}! 🎉
        </h1>
        <p className="md:text-xl text-base text-muted-foreground max-w-lg md:mt-4 mt-0">
          Makasih banget ya udah maafin aku! Semoga ini dapat memberi kamu kebahagiaan, ketenangan, dan rezeki yang
          melimpah ✨{" "}
        </p>
        <div className="flex flex-col justify-center items-center mt-2 md:mt-4">
          <p className="text-base text-center text-muted-foreground">Nih ambil THR-nya</p>
          <a
            onClick={() => {
              trigger(defaultPatterns.success);
            }}
            href="/thr.pdf"
            className="px-2 min-w-[100px] min-h-[50px] text-sm bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-md mt-2 flex justify-center items-center"
            // download={true}
          >
            THR 💵
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 text-center bg-background">
      <img src={getImage()} alt="pleading" className="w-64 h-64 object-cover mb-8" />
      <h1 className="md:text-3xl text-xl font-bold mb-4 tracking-tighter sm:text-4xl max-w-xl">
        Halo {name}, Selamat hari raya idul fitri ya!, mohon maaf lahir dan batin. Dimaafin nggak?
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-2 mt-2">
        <button
          onClick={handleYesClick}
          className="px-2 min-w-[100px] min-h-[50px] bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all shadow-md text-center"
          style={{
            fontSize: noCount > 0 ? `${1 + noCount * 0.2}rem` : "1rem",
            padding: noCount > 0 ? `${0.75 + noCount * 0.1}rem ${1.5 + noCount * 0.2}rem` : "0.75rem 1.5rem",
          }}
        >
          Oke
        </button>
        <button
          onClick={handleNoClick}
          className="px-2 min-w-[100px] min-h-[50px] text-sm bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-md"
        >
          {getNoButtonText()}
        </button>
      </div>
    </div>
  );
}
