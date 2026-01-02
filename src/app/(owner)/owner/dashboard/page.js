// src/app/(owner)/dashboard/page.js

import { DollarSign, Clock, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

// Mock data for display
const statCards = [
  { name: "Today's Revenue", value: '$450.00', icon: DollarSign, color: 'text-green-500' },
  { name: 'New Clients (7 Days)', value: '12', icon: Users, color: 'text-indigo-500' },
  { name: 'Open Appointments Today', value: '4 / 15', icon: Clock, color: 'text-yellow-500' },
];

const todayAppointments = [
  { time: '10:00 AM', client: 'Aisha Sharma', service: 'Haircut & Styling' },
  { time: '11:30 AM', client: 'Rajesh Kumar', service: 'Beard Trim' },
  { time: '01:00 PM', client: 'Priya Singh', service: 'Color Treatment' },
  { time: '02:30 PM', client: 'Vikram Gupta', service: 'Full Body Wax' },
];

export default function OwnerDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Owner Dashboard</h1>

      {/* 1. Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.name} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-600">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">{card.name}</p>
                <Icon className={`h-6 w-6 ${card.color}`} />
              </div>
              <p className="mt-1 text-3xl font-extrabold text-gray-900">{card.value}</p>
            </div>
          );
        })}
      </div>
      
      {/* 2. Main Content Layout (Appointments and Saloon Info) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Appointments) */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h2 className="text-xl font-semibold text-gray-800">Today's Appointments</h2>
            <Link href="/owner/appointments" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
              View Calendar <Calendar className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Appointment List */}
          <ul className="divide-y divide-gray-200">
            {todayAppointments.map((app, index) => (
              <li key={index} className="py-3 flex justify-between items-center hover:bg-gray-50 px-2 rounded-md transition">
                <div>
                  <p className="text-gray-900 font-medium">{app.client}</p>
                  <p className="text-sm text-gray-500">{app.service}</p>
                </div>
                <span className="text-sm font-semibold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">{app.time}</span>
              </li>
            ))}
          </ul>
          
          {todayAppointments.length === 0 && (
              <p className="text-center text-gray-500 py-6">No appointments scheduled for today yet.</p>
          )}

        </div>

        {/* Right Column (Saloon Info & Quick Links) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Saloon Information</h2>
            <p className="text-lg font-bold text-gray-900">The Royal Trim</p>
            <p className="text-sm text-gray-500 mt-1">123 MG Road, Bengaluru, 560001</p>
            <p className="text-sm text-gray-500 mt-1">Contact: 98765 43210</p>
            
            <Link href="/owner/settings" className="mt-4 block w-full text-center py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                Edit Details
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/owner/appointments/new" className="block w-full text-center py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                Book New Appointment
              </Link>
              <Link href="/owner/clients/new" className="block w-full text-center py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition">
                Add New Client
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
