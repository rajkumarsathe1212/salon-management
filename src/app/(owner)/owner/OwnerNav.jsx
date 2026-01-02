"use client";

// src/app/(admin)/admin/OwnerNav.jsx
import { Bell, LogOut, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function OwnerNav() {
  const { user, logout } = useUser();
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    // Fixed at the top, spans the entire width, pushes Sidebar content down
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 ml-64">
      <div className="flex justify-end items-center h-full px-8">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Owner Dashboard
        </div>

        {/* Right: Actions and Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-xl hover:bg-gray-50 text-gray-500 transition relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>

          <Link
            href="/owner/profile"
            className="flex items-center space-x-3 group"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-none">
                {user?.name || "Guest"}
              </p>
              <p className="text-[10px] font-medium text-indigo-500 uppercase tracking-tight mt-1">
                {user?.role} Account
              </p>
            </div>
          </Link>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="ml-2 p-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all group"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
