
// src/components/landing/CtaSection.jsx
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function CtaSection() {
    return (
        <section className="bg-indigo-700 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Start Your Salon's Digital Transformation Today
                </h2>
                <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                    No credit card required. Experience the full power of SalonManager free for 14 days.
                </p>
                <Link href="/register" className="bg-white text-indigo-700 hover:bg-indigo-100 font-black py-4 px-10 rounded-full shadow-2xl transition duration-300 inline-flex items-center text-lg transform hover:scale-105">
                    <Sparkles className="h-6 w-6 mr-2" /> Start Free Trial Now
                </Link>
            </div>
        </section>
    );
}
