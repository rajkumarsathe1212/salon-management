
// src/app/(admin)/admin/subscriptions/page.js
'use client';
import { CreditCard, ArrowUpRight, AlertCircle, CheckCircle2, Search } from 'lucide-react';

export default function SubscriptionsPage() {
  const subscriptions = [
    { id: 1, salon: "Royal Cuts", plan: "Premium", amount: "₹2,500/mo", status: "Active", expiry: "Feb 12, 2026" },
    { id: 2, salon: "Glow Spa", plan: "Basic", amount: "₹1,200/mo", status: "Expiring Soon", expiry: "Jan 25, 2026" },
    { id: 3, salon: "Urban Shave", plan: "Premium", amount: "₹2,500/mo", status: "Past Due", expiry: "Jan 10, 2026" },
  ];

  return (
    <div className="p-4 sm:p-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Subscriptions</h1>
          <p className="text-gray-500 font-medium">Manage salon billing and revenue</p>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
          <ArrowUpRight className="w-5 h-5" /> Export Revenue Data
        </button>
      </div>

      {/* Responsive Cards for Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Revenue", val: "₹1,45,000", color: "text-green-600", icon: CreditCard },
          { label: "Active Plans", val: "42", color: "text-indigo-600", icon: CheckCircle2 },
          { label: "Past Due", val: "3", color: "text-red-600", icon: AlertCircle },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
            <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Subscription Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Salon", "Plan", "Status", "Expiry", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{sub.salon}</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">{sub.plan}</span></td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-bold ${
                      sub.status === 'Active' ? 'text-green-600' : sub.status === 'Past Due' ? 'text-red-600' : 'text-amber-600'
                    }`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${
                        sub.status === 'Active' ? 'bg-green-600' : sub.status === 'Past Due' ? 'bg-red-600' : 'bg-amber-600'
                      }`} />
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">{sub.expiry}</td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 font-bold text-sm hover:underline">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
