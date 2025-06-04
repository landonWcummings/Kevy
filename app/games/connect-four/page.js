// File: app/games/connect-four/page.js
'use client';

import ConnectFourComponent from './ConnectFourComponent';

export default function ConnectFourPage({ repos }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gold mb-6">Connect Four</h1>
      <div className="w-full h-screen bg-gray-100 rounded-lg flex items-center justify-center">
      {/* Embed your ConnectFourComponent here */}
        <ConnectFourComponent repos={repos} />
      </div>
    </main>
  );
}
