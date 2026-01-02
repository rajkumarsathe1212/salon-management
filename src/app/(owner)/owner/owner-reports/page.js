
// src/app/(owner)/reports/page.js
'use client';

import { DollarSign, Calendar, Clock, BarChart } from 'lucide-react';

// --- Reusable Component for Stat Cards ---
const StatCard = ({ title, value, icon: Icon, color }) => (
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

// --- Main Owner Reports Component ---
export default function OwnerReportsPage() {
  const mockData = {
    // Static data to simulate API response
    totalRevenue: '₹45,230',
    totalAppointments: 184,
    averageServiceTime: '45 min',
    cancellations: '8%',
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
        Saloon Performance Report
      </h1>

      {/* Date Filter Bar */}
      <div className="flex items-center space-x-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors text-sm">
          Download PDF
        </button>
      </div>

      {/* 1. Key Metrics (Stat Cards) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Revenue" 
          value={mockData.totalRevenue} 
          icon={DollarSign} 
          color="border-indigo-500 text-indigo-500"
        />
        <StatCard 
          title="Appointments Booked" 
          value={mockData.totalAppointments} 
          icon={Calendar} 
          color="border-green-500 text-green-500"
        />
        <StatCard 
          title="Avg. Service Duration" 
          value={mockData.averageServiceTime} 
          icon={Clock} 
          color="border-yellow-500 text-yellow-500"
        />
        <StatCard 
          title="Cancellation Rate" 
          value={mockData.cancellations} 
          icon={BarChart} 
          color="border-red-500 text-red-500"
        />
      </div>

      {/* 2. Visual Chart Placeholder */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Monthly Revenue Trend
        </h2>
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">Placeholder for Chart Library (e.g., Recharts, Chart.js)</p>
        </div>
      </div>

      {/* 3. Top Services/Staff Table */}
      <div className="bg-white shadow-xl rounded-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Top Performing Services
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Mock Data Rows */}
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Men's Cut & Style</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹17,000</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Priya</td>
            </tr>
             <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Full Highlights</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹14,400</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vikram</td>
            </tr>
            {/* ... more rows */}
          </tbody>
        </table>
      </div>

    </div>
  );
}
