
// src/app/(admin)/admin/layout.js

import { AdminNav } from "./AdminNav";

export const metadata = {
  title: 'Super Admin Dashboard | SalonManager',
  description: 'System management and setup for the platform.',
};

export default function AdminDashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* The UI Navbar */}
      <AdminNav />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-400 border-t bg-white">
        © 2025 SalonManager Platform | Admin Console
      </footer>
    </div>
  );
}
