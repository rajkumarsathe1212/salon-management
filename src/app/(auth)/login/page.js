
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser, MOCK_USERS } from '@/context/UserContext';
import { Mail, Lock, LogIn, Sparkles, AlertCircle } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { switchRole } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const userKey = Object.keys(MOCK_USERS).find(
            key => MOCK_USERS[key].email.toLowerCase() === email.toLowerCase()
        );

        if (userKey) {
            switchRole(userKey);
            const role = MOCK_USERS[userKey].role;

            if (role === 'ADMIN') router.push('/admin/dashboard');
            else if (role === 'OWNER') router.push('/owner/dashboard');
            else router.push('/');

            console.log(`Logged in as ${role}`);
        } else {
            setError('Invalid email or password. Please try again.');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* Logo/Branding Area */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-200 mb-4 transform rotate-6">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tighter">
                        Welcome <span className="text-indigo-600">Back</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 font-medium">
                        Enter your credentials to access your account
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">
                    
                    {/* Error Notification */}
                    {error && (
                        <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl animate-in shake duration-300">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-xs font-bold leading-tight">{error}</p>
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        
                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all outline-none"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">
                                    Password
                                </label>
                                <Link href="#" className="text-[11px] font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all outline-none"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent text-sm font-black rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
                            >
                                <LogIn className="w-5 h-5" />
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                        <p className="text-sm text-gray-500 font-medium">
                            Don`t have an account?{' '}
                            <Link href="/register" className="text-indigo-600 font-bold hover:text-indigo-500 transition-colors">
                                Create one now
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Secure Badge */}
                <div className="mt-8 flex justify-center items-center gap-2 opacity-40">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        Secure SSL Encrypted Access
                    </p>
                </div>
            </div>
        </div>
    );
}
