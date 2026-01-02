
'use client';

import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  Building,
  Save
} from 'lucide-react';

export default function OwnerProfile() {
    const { user, role } = useUser();
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <div className="w-24 h-24 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-3xl font-bold border-4 border-white shadow-md">
                            {user?.avatar || 'RM'}
                        </div>
                        <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg shadow-lg border border-gray-100 text-gray-600 hover:text-indigo-600 transition group-hover:scale-110">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-gray-900">{user?.name}</h1>
                        <p className="text-gray-500 font-medium flex items-center gap-2">
                            <span className="bg-indigo-50 text-indigo-600 text-[10px] uppercase tracking-widest px-2 py-1 rounded-md font-bold">
                                {role}
                            </span>
                            • {user?.email}
                        </p>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-2xl w-fit">
                {[
                    { id: 'personal', label: 'Personal', icon: User },
                    { id: 'business', label: 'Business', icon: Building },
                    { id: 'security', label: 'Security', icon: ShieldCheck },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                            activeTab === tab.id
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        {activeTab === 'personal' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input type="text" defaultValue={user?.name} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input type="email" defaultValue={user?.email} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input type="tel" defaultValue="+91 98765 43210" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input type="text" defaultValue="Mumbai, India" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'business' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-10">
                                <Building className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-bold">Business Settings</h3>
                                <p className="text-gray-500">Manage your salon's public brand and registration details here.</p>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h3 className="text-lg font-bold">Security Settings</h3>
                                <button className="w-full p-4 border border-dashed border-gray-200 rounded-2xl text-indigo-600 font-bold hover:bg-indigo-50 transition">
                                    Change Password
                                </button>
                                <button className="w-full p-4 border border-dashed border-gray-200 rounded-2xl text-red-600 font-bold hover:bg-red-50 transition">
                                    Enable Two-Factor Authentication
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar Stats Area */}
                <div className="space-y-6">
                    <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100">
                        <h4 className="font-bold mb-2">Account Status</h4>
                        <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold mb-6">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            VERIFIED OWNER
                        </div>
                        <p className="text-indigo-100 text-sm leading-relaxed">
                            You have been a partner since <span className="text-white font-bold">Jan 2024</span>. Your current plan is <span className="text-white font-bold">Pro Salon</span>.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-4">Quick Stats</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500 font-medium">Salons Managed</span>
                                <span className="text-sm font-bold text-gray-900">02</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500 font-medium">Total Staff</span>
                                <span className="text-sm font-bold text-gray-900">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
