
// src/app/(owner)/owner/layout.js
"use client";
import { useState } from 'react';
import Sidebar from '@/app/(owner)/owner/Sidebar';
import OwnerNav from './OwnerNav';

export default function OwnerUIShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header: Fixed at the top */}
      <OwnerNav onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex">
        {/* 2. Sidebar: Fixed on the left */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* 3. Main Content Area */}
        {/* ml-64 shifts content past your 16rem/256px sidebar */}
        {/* pt-16 shifts content down below your 4rem/64px header */}
        <main className="flex-1 lg:ml-64 pt-16 min-h-screen transition-all duration-300">
          <div className="p-4 md:p-6 lg:p-10 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
