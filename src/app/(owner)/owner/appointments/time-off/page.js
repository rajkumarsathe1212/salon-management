
"use client";
import { Coffee, Clock, AlertCircle, Trash2, Plus } from 'lucide-react';

export default function TimeOffPage() {
  const blocks = [
    { id: 1, staff: "Ravi (Owner)", reason: "Lunch Break", time: "01:00 PM - 02:00 PM", type: "recurring" },
    { id: 2, staff: "Priya", reason: "Personal Work", time: "04:00 PM - 05:00 PM", type: "once" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Block Time / Breaks</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Block
        </button>
      </div>

      <div className="space-y-4">
        {blocks.map(block => (
          <div key={block.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <Coffee className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{block.reason}</h4>
                <p className="text-sm text-gray-500">{block.staff} • {block.time}</p>
              </div>
            </div>
            <button className="text-gray-300 hover:text-red-500 transition">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-xl flex gap-3 border border-blue-100">
        <AlertCircle className="h-5 w-5 text-blue-600 shrink-0" />
        <p className="text-xs text-blue-700">
          Blocked times will prevent clients from booking online and show as `Busy`` in your calendar view.
        </p>
      </div>
    </div>
  );
}
