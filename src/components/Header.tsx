import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Header() {
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Your Website</h1>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}