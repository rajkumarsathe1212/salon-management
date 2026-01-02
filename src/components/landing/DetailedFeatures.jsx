
// src/components/landing/DetailedFeatures.jsx (REVISED)
import Link from 'next/link';
import { PieChart, Zap, MessageSquare } from 'lucide-react';

const detailedFeatures = [
    {
        id: 1,
        title: "Analytics That Drive Decisions",
        description: "Stop guessing and start growing. Our comprehensive reports give you deep insights into staff productivity, peak hours, and product sales, helping you maximize profit and efficiency.",
        // Removed image field
        icon: PieChart,
        isReversed: false,
        placeholderStyle: "bg-indigo-200 border-indigo-400",
        placeholderText: "📊 Reports Dashboard View",
    },
    {
        id: 2,
        title: "Automate Your Marketing",
        description: "Send automated appointment reminders, seasonal promotions, and birthday wishes directly to clients via SMS and email. Keep your chairs full without lifting a finger.",
        // Removed image field
        icon: MessageSquare,
        isReversed: true,
        placeholderStyle: "bg-teal-200 border-teal-400",
        placeholderText: "💬 Automated Marketing Console",
    },
];

export default function DetailedFeatures() {
    return (
        <section className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Go Beyond The Basics</h2>
                    <p className="text-lg text-gray-600">Features designed to transform management into growth.</p>
                </div>

                <div className="space-y-24">
                    {detailedFeatures.map((feature) => (
                        <div 
                            key={feature.id} 
                            className={`group flex flex-col md:flex-row items-center gap-12 transition duration-500 transform ${feature.isReversed ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Placeholder Block (Replaces Image) */}
                            <div className={`w-full md:w-1/2 rounded-xl shadow-xl group-hover:shadow-2xl transition duration-300 overflow-hidden border-4 h-96 flex items-center justify-center font-bold text-2xl text-gray-800 ${feature.placeholderStyle}`}>
                                {feature.placeholderText}
                            </div>
                            
                            {/* Text Content */}
                            <div className="w-full md:w-1/2">
                                <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                                <Link 
                                    href="/service" 
                                    className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition"
                                >
                                    Learn more about {feature.title.split(' ')[0]} <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
