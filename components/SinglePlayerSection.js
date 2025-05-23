import GameCard from './GameCard';

export default function SinglePlayerSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold mb-4">Single Player Games</h2>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <GameCard key={i} title="" description="" />
        ))}
      </div>
    </div>
  );
}

