
// src/app/(owner)/staff/page.js
"use client";
import { useState } from 'react';
import { User, Phone, Mail, Clock, Plus, Calendar, MoreVertical } from 'lucide-react';
import Link from 'next/link';

const mockStaff = [
  { id: 1, name: "Priya Mehta", role: "Senior Stylist", phone: "98765 43210", email: "priya@salon.com", joined: "2023" },
  { id: 2, name: "Rahul Verma", role: "Barber", phone: "87654 32109", email: "rahul@salon.com", joined: "2024" },
  { id: 3, name: "Neha Singh", role: "Beautician", phone: "76543 21098", email: "neha@salon.com", joined: "2022" },
];

export default function StaffPage() {
  const [staff] = useState(mockStaff);

  return (
    <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-0">
      {/* Header: Responsive Stack */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-500 text-sm">Manage your team members and their schedules</p>
        </div>
        <Link 
          href="/owner/staff/add" 
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 font-semibold"
        >
          <Plus className="h-5 w-5" /> Add Staff Member
        </Link>
      </div>

      {/* Grid: Auto-responsive columns */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {staff.map((member) => (
          <div 
            key={member.id} 
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group"
          >
            {/* Top Row: Avatar & Actions */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <User className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 py-4 border-y border-gray-50 my-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                {member.phone}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
                Joined {member.joined}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <Link 
                href={`/owner/staff/add?id=${member.id}`} 
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition"
              >
                Edit Profile
              </Link>
              <button className="flex items-center justify-center gap-2 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-100">
                <Calendar className="h-4 w-4" /> Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
