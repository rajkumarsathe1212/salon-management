
// src/components/landing/FeaturesGrid.jsx
import Link from 'next/link';
import { Clock, Scissors, Users, Calendar } from 'lucide-react';

const features = [
    { icon: Calendar, title: "Online Booking", description: "24/7 client booking with automated confirmations and reminders.", link: "/services" },
    { icon: Scissors, title: "Staff & Shifts", description: "Easy-to-use scheduling, commission tracking, and performance reports.", link: "/services" },
    { icon: Users, icon: Users, title: "Client CRM", description: "Detailed profiles, service history, and notes for personalized experiences.", link: "/services" },
    { icon: Clock, title: "POS & Checkout", description: "Integrated point-of-sale for fast, secure transactions and inventory management.", link: "/services" },
];

export default function FeaturesGrid() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Core Functionality</h2>
                <p className="text-lg text-gray-600 mb-16">Everything you need to run a high-performing salon, all in one place.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Link 
                            key={index}
                            href={feature.link}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 block text-left"
                        >
                            <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
