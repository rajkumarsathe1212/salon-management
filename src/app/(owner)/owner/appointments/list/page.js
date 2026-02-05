
"use client";
import { useState } from "react";
import {
  AlertCircle,
  CalendarIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Plus,
  Scissors,
  User,
  MoreVertical,
  Pencil,
  Trash2
} from "lucide-react";
// --- IMPORT FIX HERE ---
import { format, addDays, subDays, isSameDay } from "date-fns";
import Link from "next/link";
import { APPOINTMENTS } from "@/lib/mock-data";

export default function AppointmentsList() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter based on mock data date
  const filteredAppointments = APPOINTMENTS.filter((app) => {
    const appDate = new Date(app.date);
    return isSameDay(appDate, selectedDate);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32 md:pb-10">
      {/* --- HEADER --- */}
      <div className="flex items-center justify-between mb-8 mt-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Schedule</h1>
          <p className="text-gray-500 text-sm font-medium">
            {filteredAppointments.length} {filteredAppointments.length === 1 ? 'booking' : 'bookings'} found
          </p>
        </div>
        
        {/* Desktop Add Button */}
        <Link
          href="/owner/appointments/add"
          className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 active:scale-95"
        >
          <Plus className="h-5 w-5" />
          New Appointment
        </Link>
      </div>

      {/* --- DATE NAVIGATOR --- */}
      <div className="bg-white p-3 rounded-[2rem] shadow-sm border border-gray-100 mb-8 flex items-center justify-between">
        <button
          onClick={() => setSelectedDate(subDays(selectedDate, 1))}
          className="p-3 hover:bg-gray-50 rounded-2xl transition-all active:scale-90 border border-transparent hover:border-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>

        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-indigo-500 mb-0.5">
            {format(selectedDate, "MMMM yyyy")}
          </p>
          <p className="text-lg font-bold text-gray-900 leading-none">
            {isSameDay(selectedDate, new Date()) ? "Today, " : ""}
            {format(selectedDate, "EEE do")}
          </p>
        </div>

        <button
          onClick={() => setSelectedDate(addDays(selectedDate, 1))}
          className="p-3 hover:bg-gray-50 rounded-2xl transition-all active:scale-90 border border-transparent hover:border-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* --- APPOINTMENTS LIST --- */}
      <div className="space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((app) => (
            <div
              key={app.id}
              className="group bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all"
            >
              <div className="flex items-center gap-4 p-2">
                {/* Time Indicator */}
                <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-gray-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                  <span className="text-lg font-black text-gray-900 leading-none">
                    {app.time.split(" ")[0]}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">
                    {app.time.split(" ")[1]}
                  </span>
                </div>

                {/* Main Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-gray-900 truncate">{app.client}</h3>
                    <div className={app.status === 'confirmed' ? 'text-emerald-500' : 'text-amber-500'}>
                        {app.status === 'confirmed' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
                      <Scissors className="h-3 w-3" />
                      <span>{app.service}</span>
                    </div>
                    <div className="flex items-center gap-1 text-indigo-600 text-[10px] font-bold px-2 py-0.5 bg-indigo-50 rounded-full leading-none">
                      <User className="h-2.5 w-2.5" />
                      <span>{app.staff}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2 pr-4">
                    <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-indigo-600 transition-colors">
                        <Pencil className="h-4 w-4" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-xl text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
                
                {/* Mobile Menu Icon */}
                <button className="md:hidden p-2 text-gray-300">
                    <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
            <div className="bg-white w-20 h-20 rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-10 w-10 text-gray-200" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Clear Schedule</h2>
            <p className="text-gray-500 text-sm max-w-[200px] mx-auto mt-2 leading-relaxed">
              No appointments for this day yet.
            </p>
          </div>
        )}
      </div>

      {/* --- MOBILE STICKY FLOATING BUTTON --- */}
      <div className="fixed bottom-6 left-0 right-0 px-6 md:hidden z-10">
        <Link
          href="/owner/appointments/add"
          className="flex items-center justify-center gap-3 bg-indigo-600 text-white w-full py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-300 active:scale-95 transition-transform"
        >
          <Plus className="h-6 w-6" />
          New Appointment
        </Link>
      </div>

      {/* --- GO TO TODAY BUTTON --- */}
      {!isSameDay(selectedDate, new Date()) && (
          <button
            onClick={() => setSelectedDate(new Date())}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-white border border-gray-200 text-gray-600 px-6 py-2 rounded-full text-xs font-bold shadow-xl hover:bg-gray-50 transition-all md:bottom-10"
          >
            Back to Today
          </button>
      )}
    </div>
  );
}
