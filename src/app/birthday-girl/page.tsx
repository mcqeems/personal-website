'use client';

import { useState, useEffect, useRef } from 'react';
import Card from '@/components/birthday-card';
import Letter from '@/components/letter';
import BirthdayCard from '@/components/birthday-guy-card';
import Celebration from '@/components/celebration';
import { playSound } from '@/lib/sound-effects';

export const metadata = {
  title: 'Birthday Girl',
  description: "Hey it's your Birthday!!",
};

export default function BirthdayPage() {
  const [stage, setStage] = useState<'card' | 'letter' | 'birthday-card' | 'celebration'>('card');

  const handleCardClick = () => {
    playSound('card-open');
    setStage('letter');
  };

  const handleLetterRead = () => {
    playSound('letter-complete');
    playSound('birthday-song'); // Play happy birthday song after letter
    setStage('birthday-card');
  };

  const handleBirthdayCardRead = () => {
    playSound('celebration-start');
    setStage('celebration');
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-xl">
      {stage === 'card' && <Card onOpen={handleCardClick} />}
      {stage === 'letter' && <Letter onRead={handleLetterRead} />}
      {stage === 'birthday-card' && <BirthdayCard onCelebrate={handleBirthdayCardRead} />}
      {stage === 'celebration' && <Celebration />}
    </main>
  );
}
