export default function GamePage({ params }) {
    const { game } = params;
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gold capitalize mb-4">{game.replace('-', ' ')}</h1>
        {/* Game component will load here */}
      </main>
    );
  }
  