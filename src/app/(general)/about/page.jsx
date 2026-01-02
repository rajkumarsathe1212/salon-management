
// src/app/(public)/about/page.jsx
import { Users, Sparkles, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16"> {/* pt-16 to clear the fixed Header */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Story: Simplifying Salon Management
          </h1>
          <p className="text-xl text-indigo-600 font-medium max-w-2xl mx-auto">
            We empower salon owners, managers, and stylists to focus on what they do best: creating beauty and building relationships.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
            <Sparkles className="h-8 w-8 text-indigo-600 mb-3" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To provide the most intuitive, feature-rich, and affordable management software for the beauty and wellness industry, helping small businesses grow effortlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
            <Heart className="h-8 w-8 text-indigo-600 mb-3" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in salon technology, driving innovation that transforms operational complexity into joyful simplicity for our users.
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose SalonManager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-4xl block mb-2 font-bold text-indigo-600">500+</span>
              <p className="text-gray-600 font-medium">Salons Trust Us</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-4xl block mb-2 font-bold text-indigo-600">99.9%</span>
              <p className="text-gray-600 font-medium">Uptime Guarantee</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <span className="text-4xl block mb-2 font-bold text-indigo-600">24/7</span>
              <p className="text-gray-600 font-medium">Dedicated Support</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
