
// src/app/(admin)/reports/page.js
'use client';

import { Users, Store, ArrowDownLeft, BarChart } from 'lucide-react';

// --- Reusable Component for Stat Cards (can be shared with owner) ---
const AdminStatCard = ({ title, value, icon: Icon, color }) => (
  <div className={`bg-white shadow-lg rounded-xl p-6 border-t-4 ${color} transition-shadow hover:shadow-xl`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('border-t-4', '').replace('border-t', 'bg')}`}>
        <Icon className={`w-6 h-6 ${color.replace('border-t-4 border-', 'text-').replace('border-t', 'text')}`} />
      </div>
    </div>
  </div>
);

// --- Main Admin Reports Component ---
export default function AdminReportsPage() {
  const mockData = {
    // Static data to simulate global metrics
    totalSaloons: 12,
    totalClients: 4500,
    totalAppointments: 1840,
    newRegistrations: 3, // New saloons this month
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
        System Global Report
      </h1>

      {/* 1. Global Metrics (Stat Cards) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard 
          title="Total Saloons Registered" 
          value={mockData.totalSaloons} 
          icon={Store} 
          color="border-blue-500 text-blue-500"
        />
        <AdminStatCard 
          title="Total Clients" 
          value={mockData.totalClients} 
          icon={Users} 
          color="border-purple-500 text-purple-500"
        />
        <AdminStatCard 
          title="Total Appointments" 
          value={mockData.totalAppointments} 
          icon={BarChart} 
          color="border-teal-500 text-teal-500"
        />
        <AdminStatCard 
          title="New Saloon Registrations" 
          value={mockData.newRegistrations} 
          icon={ArrowDownLeft} 
          color="border-orange-500 text-orange-500"
        />
      </div>

      {/* 2. Top Performing Saloons Table */}
      <div className="bg-white shadow-xl rounded-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Saloon Performance Leaderboard
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saloon Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue (Mock)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Appointments</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Name</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Mock Data Rows */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Royal Trim</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹8,50,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">650</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rohan S.</td>
            </tr>
             <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Modern Edge</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,20,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">420</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kavita M.</td>
            </tr>
            {/* ... more rows */}
          </tbody>
        </table>
      </div>
      
      {/* 3. Global Growth Chart Placeholder */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Saloon Registration Growth (Yearly)
        </h2>
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Placeholder for System-Wide Trend Chart</p>
        </div>
      </div>

    </div>
  );
}
