
// src/app/(admin)/admin/support/page.js
'use client';
import { MessageSquare, Clock, User, CheckCircle } from 'lucide-react';

export default function SupportPage() {
  const tickets = [
    { id: "T-101", owner: "Ravi S.", salon: "Elite Barber", issue: "Unable to add new staff member", time: "2h ago", priority: "High" },
    { id: "T-102", owner: "Ananya K.", salon: "Glow & Go", issue: "Payment gateway integration error", time: "5h ago", priority: "Urgent" },
  ];

  return (
    <div className="p-4 sm:p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Support Tickets</h1>
        <p className="text-gray-500 font-medium">Respond to salon owner inquiries</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-indigo-200 transition-all shadow-sm group">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl h-fit">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black bg-red-100 text-red-600 px-2 py-0.5 rounded uppercase tracking-tighter">
                      {ticket.priority}
                    </span>
                    <span className="text-xs font-bold text-gray-400">ID: {ticket.id}</span>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {ticket.issue}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {ticket.owner} ({ticket.salon})</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {ticket.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <button className="flex-1 sm:flex-none px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition">
                  Reply
                </button>
                <button className="flex-1 sm:flex-none px-5 py-2.5 border border-gray-100 text-gray-400 rounded-xl font-bold text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Resolve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
