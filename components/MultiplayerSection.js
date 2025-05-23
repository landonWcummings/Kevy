import GameCard from './GameCard';

export default function MultiplayerSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold mb-4">Multiplayer Games</h2>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <GameCard key={i} title="" description="" />
        ))}
      </div>
    </div>
  );
}
