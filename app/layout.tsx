import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import config from '@/config/shop-config.json';

export const metadata: Metadata = {
  title: `${config.shop.name} | ${config.shop.subTagline}`,
  description: config.shop.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0D13] text-[#F5F5F0] min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-[#C5A059] selection:text-[#0B0D13]">
        <Navbar />
        <div className="flex-grow w-full max-w-full overflow-hidden">
          {children}
        </div>
        <Footer />

        {/* Mobile Persistent Bottom Concierge Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07090D]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 max-w-full overflow-hidden">
          <Link href="/" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Home
          </Link>
          <Link href="/services" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Menu
          </Link>
          <Link href="/barbers" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Barbers
          </Link>
          <Link href="/contact" className="flex-1 py-2 text-center text-[10px] font-mono text-gray-300 hover:text-white border border-white/10">
            Contact
          </Link>
          <a href={config.shop.booksyUrl} target="_blank" rel="noopener noreferrer" className="flex-2 btn-brass-primary py-2 px-3 text-center text-[10px] font-mono font-bold">
            Book
          </a>
        </div>
      </body>
    </html>
  );
}
