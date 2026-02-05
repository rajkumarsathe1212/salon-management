
"use client";
import { Plus, IndianRupee, Tag, Calendar as CalIcon } from 'lucide-react';

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Business Expenses</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition">
          <Plus className="h-5 w-5" /> <span className="hidden md:inline">Log Expense</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Details</th>
                <th className="px-6 py-4 font-bold">Date</th>
                <th className="px-6 py-4 font-bold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { cat: 'Utilities', note: 'Electricity Bill - Dec', date: '2026-01-15', amt: '4,500' },
                { cat: 'Marketing', note: 'Facebook Ads', date: '2026-01-12', amt: '2,000' },
                { cat: 'Inventory', note: 'Towels and Napkins', date: '2026-01-10', amt: '1,200' },
              ].map((exp, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">{exp.cat}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{exp.note}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{exp.date}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-900">₹{exp.amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
