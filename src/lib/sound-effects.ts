const audioContext =
  typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

interface SoundConfig {
  frequency: number;
  duration: number;
  type: 'sine' | 'square' | 'sawtooth' | 'triangle';
  volume: number;
}

const soundConfigs: Record<string, SoundConfig> = {
  'card-open': { frequency: 523, duration: 0.3, type: 'sine', volume: 0.3 }, // C5 note
  'letter-complete': { frequency: 659, duration: 0.5, type: 'sine', volume: 0.3 }, // E5 note
  'candle-blow': { frequency: 200, duration: 0.4, type: 'triangle', volume: 0.2 }, // Low whoosh
  'celebration-start': { frequency: 784, duration: 0.4, type: 'sine', volume: 0.3 }, // G5 note
};

export function playSound(soundName: string) {
  if (!audioContext) return;

  if (soundName === 'birthday-song') {
    playBirthdaySong();
    return;
  }

  const config = soundConfigs[soundName];
  if (!config) return;

  try {
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = config.type;
    osc.frequency.value = config.frequency;

    gain.gain.setValueAtTime(config.volume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + config.duration);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start(now);
    osc.stop(now + config.duration);
  } catch (e) {
    console.error('[v0] Sound playback error:', e);
  }
}

function playBirthdaySong() {
  if (!audioContext) return;

  // Happy Birthday melody (simplified)
  const notes = [
    { freq: 392, duration: 0.4 }, // G
    { freq: 392, duration: 0.4 }, // G
    { freq: 440, duration: 0.4 }, // A
    { freq: 392, duration: 0.4 }, // G
    { freq: 523, duration: 0.4 }, // C
    { freq: 494, duration: 0.8 }, // B
    { freq: 392, duration: 0.4 }, // G
    { freq: 392, duration: 0.4 }, // G
    { freq: 440, duration: 0.4 }, // A
    { freq: 392, duration: 0.4 }, // G
    { freq: 587, duration: 0.4 }, // D
    { freq: 523, duration: 0.8 }, // C
  ];

  let time = audioContext.currentTime;

  notes.forEach(({ freq, duration }) => {
    try {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + duration);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(time);
      osc.stop(time + duration);

      time += duration;
    } catch (e) {
      console.error('[v0] Birthday song error:', e);
    }
  });
}
