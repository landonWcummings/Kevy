export default function GameCard({ title, description }) {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        <div className="h-40 bg-gray-100 mb-4 flex items-center justify-center">
          {/* Image placeholder */}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  