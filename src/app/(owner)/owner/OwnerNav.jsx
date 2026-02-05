
"use client";
import { Bell, LogOut, Menu } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function OwnerNav({ onMenuClick }) {
  const { user, logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 lg:ml-64 transition-all">
      <div className="flex justify-between lg:justify-end items-center h-full px-4 lg:px-8">
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="p-2 lg:hidden text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">
            Owner Dashboard
          </div>

          <div className="h-8 w-[1px] bg-gray-100 mx-2 hidden md:block"></div>

          <div className="flex items-center space-x-3 text-right">
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-none">{user?.name}</p>
              <p className="text-[10px] font-medium text-indigo-500 uppercase mt-1">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
