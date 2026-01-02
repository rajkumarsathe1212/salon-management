// src/app/(owner)/availability/page.js

"use client";
import { Clock, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function AvailabilityPage() {
  const [hours, setHours] = useState({
    monday: { open: "10:00", close: "20:00", closed: false },
    tuesday: { open: "10:00", close: "20:00", closed: false },
    wednesday: { open: "10:00", close: "20:00", closed: false },
    thursday: { open: "10:00", close: "20:00", closed: false },
    friday: { open: "09:00", close: "21:00", closed: false },
    saturday: { open: "09:00", close: "21:00", closed: false },
    sunday: { open: "11:00", close: "18:00", closed: false },
  });

  const [breaks, setBreaks] = useState([
    { id: 1, date: "2025-04-05", reason: "Holi Holiday" },
    { id: 2, date: "2025-12-25", reason: "Christmas" },
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Salon Availability & Breaks</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Weekly Hours */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-6 w-6 text-indigo-600" /> Weekly Operating Hours
          </h2>
          <div className="space-y-3">
            {Object.entries(hours).map(([day, time]) => (
              <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium capitalize">{day}</span>
                {time.closed ? (
                  <span className="text-red-600 font-medium">Closed</span>
                ) : (
                  <span>{time.open} – {time.close}</span>
                )}
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition">
            Edit Weekly Hours
          </button>
        </div>

        {/* Breaks & Holidays */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Breaks & Holidays</h2>
            <button className="flex items-center gap-2 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg">
              <Plus className="h-5 w-5" /> Add Break
            </button>
          </div>
          <div className="space-y-3">
            {breaks.map((b) => (
              <div key={b.id} className="flex justify-between items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="font-medium">{b.reason}</p>
                  <p className="text-sm text-gray-600">{new Date(b.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <button className="text-red-600 hover:bg-red-100 p-2 rounded">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
