'use client'; // From ChatGPT

import { Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MenuPage() {
  const router = useRouter();

  // Menu buttons - onClick currently for placeholder
  const menuItems = [
    { label: 'Start Learning', onClick: () => router.push('/learning') },
    { label: 'Progress', onClick: () => router.push('/progress') },
    { label: 'Profile Setting', onClick: () => router.push('/profile') },
    { label: 'Notification Setting', onClick: () => router.push('/notification') },
  ];

  return (    
    <div style={{ backgroundColor: '#D7F8C7' }} className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {/* Header */}
      <h1 className="text-black text-3xl font-bold mb-6">Menu</h1>
      
      <div className="w-full max-w-xs space-y-6">
        
        {/* Fetch on each menu button and create button for each */}
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="w-full flex justify-between items-center px-4 py-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            <span className="text-lg font-bold">{item.label}</span>
            <Info className="w-4 h-4 text-gray-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
