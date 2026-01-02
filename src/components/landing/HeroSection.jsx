
// src/components/landing/HeroSection.jsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-[65vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image (Using a placeholder, ensure your /public/salon-hero.jpg is attractive) */}
            <div className="absolute inset-0">
                <Image
                    src="/salon-hero.jpg"
                    alt="Modern Salon Interior"
                    priority={true}
                    fill
                    className="opacity-80 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white p-6 max-w-5xl">
                <p className="animate-fade-in text-md md:text-lg font-medium text-indigo-300 mb-2 uppercase tracking-widest" style={{ animationDelay: '100ms' }}>
                    The All-in-One Solution
                </p>
                <h1 className="animate-fade-in text-5xl md:text-8xl font-black tracking-tight leading-tight mb-4 drop-shadow-lg" style={{ animationDelay: '300ms' }}>
                    Manage Your Magic.
                </h1>
                <p className="animate-fade-in text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto" style={{ animationDelay: '500ms' }}>
                    From booking to payments, SalonManager streamlines every aspect of your business, ensuring elegance and efficiency.
                </p>
                <div className="animate-fade-in space-x-4" style={{ animationDelay: '700ms' }}>
                    <Link href="/register" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition duration-300 transform hover:scale-105 inline-block text-lg">
                        Get Started Free
                    </Link>
                    <Link href="/service" className="bg-white/90 text-indigo-700 hover:bg-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 inline-block text-lg">
                        See All Features
                    </Link>
                </div>
            </div>
        </section>
    );
}
