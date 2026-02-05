
"use client";

import { useState } from "react";
import { Briefcase, FileText, LayoutDashboard, LogOut, Menu, X, CreditCard, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";

export const AdminNav = () => {
    const { role, logout } = useUser();
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    if (role !== 'ADMIN') return null;

    const isActive = (path) => pathname === path;

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Salons', href: '/admin/salons', icon: Briefcase },
        { name: 'Subscriptions', href: '/admin/subscriptions', icon: CreditCard },
        { name: 'Support', href: '/admin/support', icon: LifeBuoy },
        { name: 'Reports', href: '/admin/reports', icon: FileText },
    ];

    return (
        <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
            {/* Desktop & Mobile Header Row */}
            <div className="h-16 flex items-center justify-between px-4 sm:px-8">
                <div className="flex items-center">
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="p-2 mr-2 md:hidden text-gray-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="text-xl font-black tracking-tighter text-indigo-400">
                        ADMIN<span className="text-white">PANEL</span>
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-4 h-full ml-10">
                    {navItems.map((item) => (
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

                {/* Right Side: Profile & Logout */}
                <div className="flex items-center gap-4 ml-auto">
                     <div className="hidden sm:block text-right border-r border-gray-700 pr-4 mr-2">
                        <p className="text-[10px] text-gray-500 font-bold uppercase leading-none">Access</p>
                        <p className="text-sm font-medium text-indigo-300 mt-1">Super Admin</p>
                     </div>
                     <button className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-3 sm:px-4 py-2 rounded-xl transition text-sm font-bold" onClick={handleLogout}>
                        <LogOut className="w-4 h-4" /> <span className="hidden xs:inline">Logout</span>
                     </button>
                </div>
            </div>

            {/* Mobile Sidebar/Menu Overlay */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-800 border-t border-gray-700 ${isOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
                <div className="flex flex-col p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 p-4 rounded-xl transition font-bold text-sm ${
                                isActive(item.href) ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20' : 'text-gray-400 hover:bg-gray-700'
                            }`}
                        >
                            <item.icon className="w-5 h-5" /> {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
