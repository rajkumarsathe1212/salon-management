
// src/app/(owner)/staff/page.js
"use client";
import { useState } from 'react';
import { User, Phone, Mail, Clock, Plus } from 'lucide-react';

const mockStaff = [
  { id: 1, name: "Priya Mehta", role: "Senior Stylist", phone: "98765 43210", email: "priya@salon.com", joined: "2023" },
  { id: 2, name: "Rahul Verma", role: "Barber", phone: "87654 32109", email: "rahul@salon.com", joined: "2024" },
  { id: 3, name: "Neha Singh", role: "Beautician", phone: "76543 21098", email: "neha@salon.com", joined: "2022" },
];

export default function StaffPage() {
  const [staff] = useState(mockStaff);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">
          <Plus className="h-5 w-5" /> Add Staff Member
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {staff.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <User className="h-600 h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {member.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {member.email}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Joined {member.joined}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="flex-1 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                Edit
              </button>
              <button className="flex-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
