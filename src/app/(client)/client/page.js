
// src/app/(client)/client/page.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, MapPin, Star, Sparkles, ChevronRight, SlidersHorizontal, Heart } from 'lucide-react';

export default function ExploreSalonsPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Data - Interface this with your API later
    const salons = [
        {
            id: "s1",
            name: "KT Unisex Salon",
            location: "Haldi, Kolhapur",
            rating: 4.8,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop",
            tags: ["Hair", "Beard", "Facial"],
            priceRange: "₹100 - ₹1200"
        },
        {
            id: "s2",
            name: "Glow & Go Studio",
            location: "Sane Guruji, Kolhapur",
            rating: 4.9,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=500&auto=format&fit=crop",
            tags: ["Facial", "Makeup"],
            priceRange: "₹150 - ₹2000"
        },
        {
            id: "s3",
            name: "The Velvet Touch",
            location: "Kolhapur",
            rating: 4.7,
            reviews: 210,
            image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=500&auto=format&fit=crop",
            tags: ["Spa", "Massage"],
            priceRange: "₹250 - ₹3000"
        }
    ];

    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section inside the Main Content */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-2">
                    Find your <span className="text-indigo-600">Next Look</span>
                </h1>
                <p className="text-gray-500 font-medium">Book top-rated stylists and salons in your area.</p>
            </div>

            {/* Search and Filters */}
            <div className="sticky top-20 z-40 bg-gray-50/95 backdrop-blur-sm py-4 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                        <input 
                            type="text"
                            placeholder="Search salons or services..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none font-medium transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-white border border-gray-100 px-6 py-4 rounded-2xl font-bold text-gray-700 hover:bg-gray-100 transition-all">
                        <SlidersHorizontal className="w-5 h-5" />
                        Filters
                    </button>
                </div>

                {/* Categories */}
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2 no-scrollbar">
                    {['All', 'Trending', 'Barber', 'Hair Salon', 'Skin Care', 'Nails'].map((cat) => (
                        <button key={cat} className="whitespace-nowrap px-6 py-2 bg-white border border-gray-100 rounded-full text-xs font-black text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm">
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Salon Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {salons.map((salon) => (
                    <div key={salon.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
                        
                        {/* Optimized Image Wrapper */}
                        <div className="relative h-60 overflow-hidden">
                            <Image 
                                src={salon.image} 
                                alt={salon.name} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                priority={salon.id === "s1"} 
                            />
                            
                            <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                                <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-lg">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                    <Star className="w-3 h-3 fill-white" />
                                    <span className="text-[10px] font-black">{salon.rating}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">
                                    {salon.name}
                                </h3>
                                <span className="text-sm font-black text-indigo-600">{salon.priceRange}</span>
                            </div>

                            <div className="flex items-center gap-1 text-gray-400 mb-6">
                                <MapPin className="w-4 h-4" />
                                <span className="text-xs font-bold">{salon.location}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-8">
                                {salon.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-gray-50 text-gray-400 px-3 py-1 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link 
                                href={`/client/booking?salonId=${salon.id}`}
                                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
                            >
                                Book Now <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
