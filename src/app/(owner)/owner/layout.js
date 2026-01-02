
// src/app/(owner)/owner/layout.js
import Sidebar from '@/app/(owner)/owner/Sidebar';
import OwnerNav from './OwnerNav';

export const metadata = {
  title: 'Dashboard | SalonManager',
  description: 'Management interface for salon operations.',
};

export default function OwnerUIShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header: Fixed at the top */}
      <OwnerNav />

      <div className="flex">
        {/* 2. Sidebar: Fixed on the left */}
        <Sidebar />

        {/* 3. Main Content Area */}
        {/* ml-64 shifts content past your 16rem/256px sidebar */}
        {/* pt-16 shifts content down below your 4rem/64px header */}
        <main className="flex-1 ml-64 pt-16 min-h-screen">
          <div className="p-6 lg:p-10 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
