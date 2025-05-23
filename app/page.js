import GameSection from '../components/GameSection';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gold mb-4">Welcome to Kevy</h1>
        <p className="text-lg text-gray-700">
          Kevy is a clean, minimalistic gaming hub offering a curated selection of single-player and live multiplayer experiences.
        </p>
      </section>
      <GameSection />
    </main>
  );
}