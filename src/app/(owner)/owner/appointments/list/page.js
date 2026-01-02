
// src/app/(owner)/appointments/list/page.js
"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'; // Removed unused Calendar icon
import { format, addDays, subDays, isSameDay } from 'date-fns'; // Added isSameDay for filtering
import Link from 'next/link';

// Mock data: added 'date' field to mock realistic filtering
const mockAppointments = [
  { id: 1, time: "10:00 AM", client: "Aisha Sharma", service: "Haircut & Color", staff: "Priya", status: "confirmed", date: new Date() },
  { id: 2, time: "11:30 AM", client: "Rajesh Kumar", service: "Beard Trim", staff: "Rahul", status: "confirmed", date: new Date() },
  { id: 3, time: "02:00 PM", client: "Neha Gupta", service: "Manicure + Pedicure", staff: "Priya", status: "pending", date: addDays(new Date(), 1) },
  { id: 4, time: "04:30 PM", client: "Vikram Singh", service: "Facial", staff: "Neha", status: "confirmed", date: subDays(new Date(), 1) },
];

// Helper function to get status classes
const getStatusClasses = (status) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function AppointmentsList() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // --- LOGIC FIX: Filter appointments by selectedDate ---
  const filteredAppointments = mockAppointments.filter(app => 
    isSameDay(app.date, selectedDate)
  );

  return (
    <>
      <div className="mb-8">

        <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointments List</h1>
            <Link className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition" href="/owner/appointments">
                <Plus className="h-5 w-5" /> Calendar View
            </Link>
        </div>

        {/* Date Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 inline-flex flex-wrap items-center gap-4">
          <button 
            onClick={() => setSelectedDate(subDays(selectedDate, 1))} 
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Previous day"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Selected Date</p>
            {/* FIX: Use correct format string for full date */}
            <p className="text-xl font-bold">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
          </div>
          
          <button 
            onClick={() => setSelectedDate(addDays(selectedDate, 1))} 
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Next day"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setSelectedDate(new Date())} 
            // FIX: Conditionally style the 'Today' button to indicate selection
            className={`ml-6 px-5 py-2 rounded-lg font-medium transition duration-150 ${
                isSameDay(selectedDate, new Date()) 
                ? 'bg-indigo-700 text-white shadow-md' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Today
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">
            {filteredAppointments.length} Appointments for {format(selectedDate, 'dd MMM yyyy')}
          </h2>
        </div>
        
        <ul className="divide-y">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map(app => (
              <li key={app.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className="text-2xl font-bold text-indigo-600 w-24">{app.time}</div>
                    <div>
                      {/* SYNTAX FIX: Closed the p tag string correctly */}
                      <p className="font-semibold text-lg">{app.client}</p>
                      <p className="text-gray-600">{app.service} • with {app.staff}</p>
                    </div>
                  </div>
                  
                  {/* LOGIC FIX: Correctly applies conditional classes using getStatusClasses helper */}
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusClasses(app.status)}`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)} {/* Capitalize status */}
                  </span>
                </div>
              </li>
            ))
          ) : (
             <li className="p-6 text-center text-gray-500">
                <p>No appointments scheduled on {format(selectedDate, 'EEEE, MMM d')}.</p>
                <p className="mt-2 text-sm">Click the arrows to check other dates.</p>
             </li>
          )}
        </ul>
      </div>
    </>
  );
}
