
// src/app/(admin)/admin/AdminNav.jsx
"use client";

import { Briefcase, FileText, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";

export const AdminNav = () => {
    const { role, logout } = useUser();
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    if (role !== 'ADMIN') return null;

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-gray-900 text-white shadow-lg h-16 flex items-center px-8 sticky top-0 z-50">
            <div className="text-xl font-black tracking-tighter mr-10 text-indigo-400">
                ADMIN<span className="text-white">PANEL</span>
            </div>
            
            <div className="space-x-6 flex h-full">
                {[
                    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
                    { name: 'Salons', href: '/admin/salons', icon: Briefcase },
                    { name: 'Reports', href: '/admin/reports', icon: FileText },
                ].map((item) => (
                    <Link 
                        key={item.name}
                        href={item.href} 
                        className={`flex items-center gap-2 px-2 border-b-2 transition font-medium text-sm ${
                            isActive(item.href) ? 'border-indigo-500 text-white' : 'border-transparent text-gray-400 hover:text-indigo-300'
                        }`}
                    >
                        <item.icon className="w-4 h-4" /> {item.name}
                    </Link>
                ))}
            </div>

            <div className="ml-auto flex items-center gap-6">
                 <div className="text-right">
                    <p className="text-[10px] text-gray-500 font-bold uppercase leading-none">System Access</p>
                    <p className="text-sm font-medium text-indigo-300 leading-none mt-1">Super Admin</p>
                 </div>
                 <button className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-xl transition text-sm font-bold" onClick={handleLogout}>
                    <LogOut className="w-4 h-4" /> Logout
                 </button>
            </div>
        </nav>
    );
}
