
// src/app/(general)/pricing/page.js

import Link from 'next/link';
import { Check } from 'lucide-react'; // Icon for features

// Mock data for the pricing plans
const pricingPlans = [
  {
    name: 'Standard',
    price: '$49',
    interval: '/month',
    description: 'Perfect for small salons and independent stylists.',
    features: [
      'Unlimited Clients',
      'Online Booking Portal',
      'Basic Staff Management',
      'Email Notifications',
      'Standard Support (Email)',
    ],
    isPrimary: false,
  },
  {
    name: 'Professional',
    price: '$99',
    interval: '/month',
    description: 'Everything a growing, multi-staff salon needs to thrive.',
    features: [
      'All Standard features',
      'Multi-Location Support',
      'Advanced Inventory Tracking',
      'SMS Reminders',
      'Customizable Reporting',
      'Priority Phone Support',
    ],
    isPrimary: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    interval: '/month',
    description: 'Full suite of features for large chains and high-volume businesses.',
    features: [
      'All Professional features',
      'Dedicated Account Manager',
      'Custom Integrations (POS, Payroll)',
      'API Access',
      '24/7 Premium Support',
      'Branded Mobile App (Add-on)',
    ],
    isPrimary: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header/Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Pricing</h1>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            The right plan for your business size
          </p>
          <p className="mt-4 text-xl text-gray-500">
            No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl shadow-xl transition duration-500 ease-in-out transform hover:scale-[1.02] 
                        ${plan.isPrimary ? 'bg-indigo-600 ring-4 ring-indigo-500 shadow-indigo-200' : 'bg-white ring-1 ring-gray-200'}`}
            >
              <div className={`p-8 ${plan.isPrimary ? 'text-white' : 'text-gray-900'}`}>
                <h3 className="text-2xl font-bold tracking-tight">{plan.name ? plan.name : ""}</h3>
                <p className="mt-4 text-sm font-medium opacity-80">{plan.description}</p>
                <p className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price ? plan.price : ""}</span>
                  <span className="text-xl font-semibold">{plan.interval}</span>
                </p>
              </div>

              {/* Call-to-Action Button */}
              <div className="px-8 pt-6 pb-8">
                <Link
                  href={plan.name === 'Standard' ? '/register' : '/contact'}
                  className={`block w-full text-center py-3 px-6 border border-transparent rounded-lg text-lg font-medium shadow-md transition duration-300 
                            ${plan.isPrimary 
                              ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                              : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                >
                  {plan.isPrimary ? 'Start Today' : 'Get Started'}
                </Link>
              </div>

              {/* Feature List */}
              <div className={`p-8 pt-0 ${plan.isPrimary ? 'text-indigo-100' : 'text-gray-600'}`}>
                <h4 className="sr-only">Features</h4>
                <ul role="list" className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check 
                        className={`flex-shrink-0 h-6 w-6 mr-3 ${plan.isPrimary ? 'text-indigo-200' : 'text-indigo-600'}`} 
                        aria-hidden="true" 
                      />
                      <span className={`text-base ${plan.isPrimary ? 'text-white' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA/Contact */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-lg text-gray-700">
                Need a custom solution or have questions? 
                <Link href="/contact" className="ml-2 font-medium text-indigo-600 hover:text-indigo-800">
                    Contact our sales team.
                </Link>
            </p>
        </div>

      </div>
    </div>
  );
}
