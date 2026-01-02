
// src/app/(admin)/admin/salons/register/page.js
"use client";

import { useState } from 'react';
import { Briefcase, User, Mail, List, MapPin, Image as ImageIcon, Scissors, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterSaloonPage() {
    const [formData, setFormData] = useState({
        saloonName: '',
        ownerName: '',
        ownerEmail: '',
        plan: 'Standard',
        address: '',
        category: 'Unisex',
        imageUrl: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header: Reduced bottom margin and smaller text */}
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Register New Salon</h1>
                    <p className="text-sm text-gray-500">Add a new business partner to the platform console.</p>
                </div>
                <Link 
                    href="/admin/salons" 
                    className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 transition text-sm font-semibold shadow-sm"
                >
                    <List className="w-4 h-4" /> View All Salons
                </Link>
            </div>

            {/* Form: Reduced padding from p-8 to p-6 */}
            <form className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 grid grid-cols-12 gap-y-5 gap-x-4">

                {/* Section 1: Salon Identity */}
                <div className="col-span-12 border-b border-gray-50 pb-2">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">1. Salon Identity</h3>
                </div>

                <div className="col-span-12 md:col-span-8 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Salon Name</label>
                    <div className="relative">
                        <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input name="saloonName" onChange={handleChange} required className="pl-9 w-full rounded-lg border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 py-2 text-sm border outline-none transition" placeholder="e.g. The Royal Trim" />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Category</label>
                    <div className="relative">
                        <Scissors className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <select name="category" onChange={handleChange} className="pl-9 w-full rounded-lg border-gray-200 bg-gray-50/50 focus:bg-white py-2 text-sm border outline-none appearance-none">
                            <option value="Unisex">Unisex</option>
                            <option value="Mens">Mens Only</option>
                            <option value="Womens">Womens Only</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-12 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Physical Address</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input name="address" onChange={handleChange} required className="pl-9 w-full rounded-lg border-gray-200 bg-gray-50/50 focus:bg-white py-2 text-sm border outline-none" placeholder="Enter full street address" />
                    </div>
                </div>

                {/* Section 2: Ownership */}
                <div className="col-span-12 border-b border-gray-50 pb-2 mt-2">
                    <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">2. Ownership & Billing</h3>
                </div>

                <div className="col-span-12 md:col-span-6 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Owner Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input name="ownerName" onChange={handleChange} required className="pl-9 w-full rounded-lg border-gray-200 bg-gray-50/50 focus:bg-white py-2 text-sm border outline-none" placeholder="John Doe" />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Owner Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input name="ownerEmail" type="email" onChange={handleChange} required className="pl-9 w-full rounded-lg border-gray-200 bg-gray-50/50 focus:bg-white py-2 text-sm border outline-none" placeholder="owner@example.com" />
                    </div>
                </div>

                {/* Compact Plan Selection */}
                <div className="col-span-12 space-y-3 mt-2">
                    <label className="text-xs font-semibold text-gray-600 ml-1">Subscription Tier</label>
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { id: 'Standard', price: '49', color: 'indigo' },
                            { id: 'Professional', price: '99', color: 'indigo' },
                            { id: 'Enterprise', price: '199', color: 'indigo' }
                        ].map((p) => (
                            <label 
                                key={p.id} 
                                className={`relative p-3 border rounded-xl cursor-pointer transition-all flex flex-col items-center gap-0.5 ${
                                    formData.plan === p.id 
                                    ? 'bg-indigo-50 border-indigo-500 shadow-sm' 
                                    : 'bg-white border-gray-100 hover:border-gray-200'
                                }`}
                            >
                                <input type="radio" name="plan" value={p.id} className="hidden" onChange={handleChange} checked={formData.plan === p.id} />
                                <span className={`text-[10px] font-bold uppercase ${formData.plan === p.id ? 'text-indigo-600' : 'text-gray-400'}`}>{p.id}</span>
                                <div className="flex items-baseline">
                                    <span className="text-lg font-bold text-gray-900">${p.price}</span>
                                    <span className="text-[10px] text-gray-400 ml-0.5">/mo</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 pt-4">
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-md shadow-indigo-100 transition flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Complete Registration
                    </button>
                </div>
            </form>
        </div>
    );
}
