"use client";

import { useState } from 'react';
import { Building, DollarSign, Bell, Lock, ChevronRight } from 'lucide-react';

const settingsTabs = [
  { id: 'business', name: 'Business Profile', desc: 'Salon info and location', icon: Building },
  { id: 'billing', name: 'Billing & Plan', desc: 'Manage your subscription', icon: DollarSign },
  { id: 'notifications', name: 'Notifications', desc: 'Alerts and SMS settings', icon: Bell },
  { id: 'security', name: 'Security', desc: 'Password and 2FA', icon: Lock },
];

export default function OwnerSettingsPage() {
  const [activeTab, setActiveTab] = useState('business');

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your salons presence and account preferences.</p>
      </header>
    
      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- LEFT SIDE: Navigation Sidebar (Mobile: Full Width List) --- */}
        <nav className="w-full lg:w-1/3 space-y-2">
          {settingsTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 border-2 ${
                  isActive 
                    ? 'bg-indigo-50 border-indigo-600 text-indigo-700 shadow-sm' 
                    : 'bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-none">{tab.name}</p>
                    <p className={`text-xs mt-1 ${isActive ? 'text-indigo-500' : 'text-gray-400'}`}>{tab.desc}</p>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90 lg:rotate-0' : ''}`} />
              </button>
            );
          })}
        </nav>

        {/* --- RIGHT SIDE: Content Area --- */}
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {activeTab === 'business' && <BusinessProfile />}
          {activeTab === 'billing' && <BillingAndPlan />}
          {(activeTab === 'notifications' || activeTab === 'security') && (
            <div className="py-12 text-center">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Lock className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
              <p className="text-gray-500 max-w-xs mx-auto mt-2">
                We are working hard to bring the {activeTab} settings to your dashboard.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// --- Specialized Sub-Components ---

function BusinessProfile() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Salon Information</h3>
        <p className="text-sm text-gray-500 mb-6">This information will be visible to your customers.</p>
        
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Salon Name</label>
              <input type="text" defaultValue="The Royal Trim" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Owner Email</label>
              <input type="email" defaultValue="ravi.m@royaltrim.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Address</label>
            <textarea rows="3" defaultValue="123 Queen's Road, City Center" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition" />
          </div>

          <div className="pt-4">
            <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function BillingAndPlan() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Current Subscription</h3>
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-xl shadow-indigo-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-indigo-100 text-sm font-medium uppercase tracking-wider">Active Plan</p>
              <h4 className="text-2xl font-black mt-1">Professional Plan</h4>
            </div>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase">Monthly</span>
          </div>
          <div className="mt-8 flex items-baseline gap-1">
            <span className="text-3xl font-bold">₹1,499</span>
            <span className="text-indigo-200">/month</span>
          </div>
          <p className="mt-4 text-sm text-indigo-100 border-t border-white/10 pt-4">Next billing cycle: <span className="font-bold">January 15, 2026</span></p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition">
          Change Plan
        </button>
        <button className="p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition">
          Download Invoices
        </button>
      </section>
    </div>
  );
}