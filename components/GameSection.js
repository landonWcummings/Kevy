import SinglePlayerSection from './SinglePlayerSection';
import MultiplayerSection from './MultiplayerSection';

export default function GameSection() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <SinglePlayerSection />
      <MultiplayerSection />
    </div>
  );
}
