// File: components/SinglePlayerSection.js

import Link from 'next/link';
import GameCard from './GameCard';

export default function SinglePlayerSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold mb-4">
        Single Player Games
      </h2>
      <div className="space-y-6">
        {/* Connect Four preview */}
        <Link href="/games/connect-four" className="block">
          <GameCard
            imageSrc="/images/connect4.png"
            title="Connect Four"
            description="Classic 7×6 grid—get four in a row!"
          />
        </Link>

        {/* Other placeholders */}
        {[2, 3, 4].map((i) => (
          <GameCard key={i} title="" description="" />
        ))}
      </div>
    </div>
  );
}
