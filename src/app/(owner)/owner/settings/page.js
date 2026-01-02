
// src/app/(owner)/settings/page.js
"use client";

import { useState } from 'react';
import { Building, DollarSign, Bell, Lock } from 'lucide-react';

const settingsTabs = [
  { id: 'business', name: 'Business Profile', icon: Building },
  { id: 'billing', name: 'Billing & Plan', icon: DollarSign },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'security', name: 'Security', icon: Lock },
];

// --- Sub-Components for Settings ---

const BusinessProfile = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold border-b pb-2">Salon Information</h3>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="salonName" className="block text-sm font-medium text-gray-700">Salon Name</label>
        <input type="text" id="salonName" defaultValue="The Royal Trim" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">Owner Email</label>
        <input type="email" id="ownerEmail" defaultValue="ravi.m@royaltrim.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <textarea id="address" rows="3" defaultValue="123 Queen's Road, City Center" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
      </div>
      <div className="md:col-span-2 pt-4 border-t">
        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">Save Changes</button>
      </div>
    </form>
  </div>
);

const BillingAndPlan = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold border-b pb-2">Subscription Details</h3>
    <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
      <p className="text-lg font-bold text-indigo-800">Current Plan: Professional (Monthly)</p>
      <p className="text-sm text-indigo-700 mt-1">Next Billing Date: Jan 15, 2026</p>
    </div>
    <div className="pt-4 space-y-4">
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Upgrade Plan</button>
      <button className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Update Payment Info</button>
    </div>
  </div>
);

// We won't build the other two for brevity, but they would follow a similar pattern.
const Placeholder = ({ name }) => (
  <div className="p-10 text-center text-gray-500 border border-dashed rounded-lg">
    <p>Configuration panel for **{name}** is coming soon.</p>
    <p className="mt-2 text-sm">You would manage email templates, SMS settings, or password/2FA here.</p>
  </div>
);


export default function OwnerSettingsPage() {
  const [activeTab, setActiveTab] = useState('business');

  const renderContent = () => {
    switch (activeTab) {
      case 'business':
        return <BusinessProfile />;
      case 'billing':
        return <BillingAndPlan />;
      case 'notifications':
        return <Placeholder name="Notifications" />;
      case 'security':
        return <Placeholder name="Security" />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Salon Settings</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 space-x-4 overflow-x-auto">
          {settingsTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium transition duration-150 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="py-4">
          {renderContent()}
        </div>
      </div>
    </>
  );
}
