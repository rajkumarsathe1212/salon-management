
"use client";

// src/app/(client)/client/layout.js
import Link from 'next/link';
import { Calendar, User, ShoppingBag, LogOut } from 'lucide-react';
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function ClientDashboardLayout({ children }) {

    const { logout } = useUser();
    const router = useRouter();

    const onLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* Header */}
            <header className="border-b sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-extrabold text-indigo-600">
                        SalonManager
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                        <Link href="/client/booking" className="hover:text-indigo-600 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Book Now
                        </Link>
                        <Link href="/client/appointments" className="hover:text-indigo-600 flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4" /> My Appointments
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/client/profile"
                            className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700"
                        >
                            <User className="w-5 h-5" />
                        </Link>
                        <button className="text-gray-400 hover:text-red-500" onClick={onLogout}>
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 py-8 pb-28">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
                <Link href="/client/booking" className="flex flex-col items-center text-xs text-gray-600">
                    <Calendar className="w-6 h-6" />
                    <span>Book</span>
                </Link>
                <Link href="/client/appointments" className="flex flex-col items-center text-xs text-gray-600">
                    <ShoppingBag className="w-6 h-6" />
                    <span>Visits</span>
                </Link>
                <Link href="/client/profile" className="flex flex-col items-center text-xs text-gray-600">
                    <User className="w-6 h-6" />
                    <span>Profile</span>
                </Link>
            </nav>
        </div>
    );
}

