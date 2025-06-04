// File: components/GameCard.js
import Link from 'next/link';

export default function GameCard({ imageSrc, title, description }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
      {imageSrc && (
        <div className="w-full">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
      <div className="p-4">
        {title && (
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
