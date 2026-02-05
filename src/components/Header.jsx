
// src/components/Header.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X, LogIn } from 'lucide-react';
import { useUser } from '@/context/UserContext';

const publicNav = [
  { name: "Services", href: "/service" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { role, user } = useUser();

    const getDashboardLink = (role) => {
        switch (role) {
            case 'ADMIN': return '/admin/dashboard';
            case 'OWNER': return '/owner/dashboard';
            case 'CLIENT': return '/client';
            default: return '/login';
        }
    };

    const isAuthenticated = !!role; 

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* 1. Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-indigo-600 hover:text-indigo-800">
                            <User className="h-7 w-7" />
                            <span>SalonManager</span>
                        </Link>
                    </div>

                    {/* 2. Desktop Nav */}
                    <div className="hidden md:flex md:space-x-4">
                        {publicNav.map(item => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Logged in as {role}
                                </span>
                                <Link 
                                    href={getDashboardLink(role)} 
                                    className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-md shadow-indigo-100"
                                >
                                    Go to Portal
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Login</Link>
                                <Link href="/register" className="px-5 py-2 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-md shadow-indigo-100">Register</Link>
                            </>
                        )}
                    </div>

                    {/* 4. Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-2">
                    {publicNav.map(item => (
                        <Link key={item.name} href={item.href} className="block px-3 py-2 text-gray-700 font-medium hover:bg-indigo-50 rounded-lg">
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t">
                        <Link href={getDashboardLink(role)} className="block w-full text-center py-3 bg-indigo-600 text-white rounded-xl font-bold">
                            {isAuthenticated ? "Open Dashboard" : "Login / Register"}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
