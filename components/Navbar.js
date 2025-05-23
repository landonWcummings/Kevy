'use client';
import Link from 'next/link';
import RotatingGames from './RotatingGames.js';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gold">Kevy</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gold">Home</Link></li>
          <li><Link href="/profile" className="hover:text-gold">Profile</Link></li>
          <li><RotatingGames /></li>
        </ul>
      </div>
    </nav>
  );
}
