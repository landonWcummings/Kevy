'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const gameList = ['chess', 'tic-tac-toe', 'sudoku', 'checkers'];

export default function RotatingGames() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gameList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const game = gameList[current];
  return (
    <Link href={`/games/${game}`} className="hover:text-gold">
      {game.replace('-', ' ')}
    </Link>
  );
}
