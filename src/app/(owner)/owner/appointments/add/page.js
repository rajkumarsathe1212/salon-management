
// src/app/(owner)/appointments/add/page.js
"use client";
import { useState } from 'react';
import { Calendar, Clock, User, Scissors, Phone, Plus, List } from 'lucide-react';
import Link from 'next/link';

const mockClients = ["Aisha Sharma", "Rajesh Kumar", "Priya Singh", "Vikram Gupta", "New Client"];
const mockStaff = ["Priya Mehta", "Rahul Verma", "Neha Singh"];
const mockServices = [
  { name: "Haircut & Styling", price: 800, duration: 45 },
  { name: "Beard Trim", price: 300, duration: 20 },
  { name: "Hair Color", price: 2500, duration: 120 },
];

export default function AddAppointment() {
    const [form, setForm] = useState({
        client: "",
        phone: "",
        service: "",
        staff: "",
        date: "",
        time: "",
    });

  return (
    <>
        <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Book New Appointment</h1>
            <Link className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition" href="/owner/appointments/list">
                <List className="h-5 w-5" /> See Bookings
            </Link>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
            {/* Client Info */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                <select
                value={form.client}
                onChange={(e) => setForm({ ...form, client: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                    <option value="">Select or type new client</option>
                    {mockClients.map(c => <option key={c}>{c}</option>)}
                </select>
                {form.client === "New Client" && (
                    <input type="text" placeholder="Enter full name" className="mt-3 w-full px-4 py-3 border rounded-lg" />
                )}
            </div>

            {/* Phone */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 rounded-l-lg bg-gray-50 text-gray-500">+91</span>
                    <input type="tel" placeholder="98765 43210" className="flex-1 px-4 py-3 border rounded-r-lg" />
                </div>
            </div>

            {/* Service & Staff */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <select className="w-full px-4 py-3 border rounded-lg">
                        <option>Select Service</option>
                        {mockServices.map(s => <option key={s.name}>{s.name} • ₹{s.price} • {s.duration} min</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assigned Staff</label>
                    <select className="w-full px-4 py-3 border rounded-lg">
                        <option>Any Available</option>
                        {mockStaff.map(s => <option key={s}>{s}</option>)}
                    </select>
                </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="date" className="w-full px-4 py-3 border rounded-lg" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <select className="w-full px-4 py-3 border rounded-lg">
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>02:00 PM</option>
                        <option>04:00 PM</option>
                        <option>06:00 PM</option>
                    </select>
                </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-6">
                <button type="button" className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                Cancel
                </button>
                <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                Confirm Booking
                </button>
            </div>
            </form>
        </div>
    </>
  );
}
