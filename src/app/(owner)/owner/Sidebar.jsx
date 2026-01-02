
// src/components/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Clock,
  Scissors,
  ShoppingCart,
  Settings,
  LogOut
} from "lucide-react";
import { useUser } from "@/context/UserContext";

const navItems = [
  { name: "Dashboard", href: "/owner/dashboard", icon: LayoutDashboard },
  { name: "Appointments", href: "/owner/appointments/list", icon: Clock },
  { name: "Clients", href: "/owner/clients", icon: Users },
  { name: "Services", href: "/owner/services", icon: Scissors },
  { name: "Inventory", href: "/owner/products/inventory", icon: ShoppingCart },
  { name: "Settings", href: "/owner/settings", icon: Settings },
];

const Sidebar = () => {
  const { role, user } = useUser();
  const pathname = usePathname();

  if (role !== 'OWNER') return null;

  const isActive = (href) => pathname === href;

  const handleLogout = () => {
    
  }

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 text-white z-50 shadow-2xl">
      <div className="flex flex-col h-full">

        {/* Logo Section */}
        <div className="h-16 flex items-center px-6 bg-slate-950">
          <Link href="/owner/dashboard" className="text-xl font-black tracking-tighter text-indigo-400">
            SALON<span className="text-white">PRO</span>
          </Link>
        </div>

        {/* User Brief Section */}
        <div className="px-6 py-6 border-b border-slate-800">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Salon Owner</p>
            <p className="text-sm font-bold text-white truncate">{user?.name || "Ravi M."}</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 
                ${active 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "text-white" : "text-indigo-400"}`} />
                <span className="font-semibold text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 bg-slate-950/50 border-t border-slate-800">
          <button className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors" onClick={() => handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="font-bold text-sm">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
