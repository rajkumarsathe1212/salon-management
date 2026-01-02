
// src/app/(general)/services/page.jsx
import { Calendar, CreditCard, Users, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function PublicServicesPage() {
  const features = [
    {
      icon: Calendar,
      title: "Seamless Booking & Scheduling",
      description: "Manage all appointments from a single, intuitive calendar. Reduce no-shows with automated reminders and allow clients to book online 24/7.",
    },
    {
      icon: CreditCard,
      title: "Integrated POS & Payments",
      description: "Process all service and product transactions quickly and securely. Handle multiple payment types and track sales instantly.",
    },
    {
      icon: Users,
      title: "Client Relationship Management (CRM)",
      description: "Keep detailed client history, track preferences, and run targeted marketing campaigns directly from the client profile.",
    },
    {
      icon: Zap,
      title: "Staff & Payroll Management",
      description: "Effortlessly manage staff availability, shifts, and calculate commissions or payroll based on service performance and hours worked.",
    },
    {
      icon: TrendingUp,
      title: "Powerful Reporting & Analytics",
      description: "Gain real-time insights into your salon's performance, from service revenue and product inventory to staff utilization and peak booking times.",
    },
    {
      icon: Shield,
      title: "Inventory Control",
      description: "Track retail products and professional supplies. Get low-stock alerts and manage vendor orders directly to maintain optimal stock levels.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Features Designed to Grow Your Salon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SalonManager provides an all-in-one platform to automate operations, manage clients, and boost your bottom line.
          </p>
          <Link 
            href="/register" 
            className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            Start Your Free Trial
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-200"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Block */}
        <div className="mt-20 bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-xl text-center shadow-inner">
          <h2 className="text-3xl font-bold text-indigo-900 mb-3">Ready to transform your business?</h2>
          <p className="text-lg text-indigo-800 mb-6">
            Join hundreds of salons that are thriving with SalonManager.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 transition shadow-lg"
          >
            Request a Demo
          </Link>
        </div>

      </div>
    </div>
  );
}
