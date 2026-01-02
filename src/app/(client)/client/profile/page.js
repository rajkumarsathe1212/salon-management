
// src/app/(client)/profile/page.js
"use client";

import { User, Mail, Phone, Calendar, Edit2 } from 'lucide-react';

// Mock data for the client and their bookings
const mockClient = {
  name: "Priya Singh",
  email: "priya.s@example.com",
  phone: "98765 43210",
  memberSince: "May 2024",
};

const mockBookings = [
  { id: 101, date: "2025-11-20", time: "11:00 AM", service: "Full Hair Color & Style", staff: "Neha", price: 120 },
  { id: 102, date: "2025-10-15", time: "09:00 AM", service: "Manicure & Pedicure", staff: "Rahul", price: 65 },
  { id: 103, date: "2025-09-01", time: "03:30 PM", service: "Haircut", staff: "Priya", price: 45 },
];

export default function ClientProfilePage() {
  // In a real app, you would fetch this data using useEffect and useState

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Profile & Activity</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Client Information Card */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-600 h-fit">
          <div className="flex justify-between items-start mb-4 border-b pb-3">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <button className="text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-50 transition">
                <Edit2 className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <User className="h-5 w-5 text-indigo-500" />
              <span className="font-bold">{mockClient.name}</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-500" />
              <span>{mockClient.email}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-indigo-500" />
              <span>{mockClient.phone}</span>
            </p>
            <p className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Member since: {mockClient.memberSince}</span>
            </p>
          </div>
        </div>

        {/* Right Column: Past Appointments */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Past Bookings</h2>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {mockBookings.map(booking => (
              <li key={booking.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                <div>
                  <p className="font-semibold text-gray-900">{booking.service}</p>
                  <p className="text-sm text-gray-500">
                    {booking.date} at {booking.time} • with {booking.staff}
                  </p>
                </div>
                <span className="text-lg font-bold text-green-600">${booking.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          
          {mockBookings.length === 0 && (
            <p className="p-6 text-center text-gray-500">You have no past bookings.</p>
          )}

        </div>
      </div>
    </>
  );
}
