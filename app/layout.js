import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Kevy',
  description: 'Clean gaming hub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
