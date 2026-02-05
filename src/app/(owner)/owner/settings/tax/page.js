
"use client";
import { ShieldCheck, Info, Percent } from 'lucide-react';

export default function TaxSettingsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Tax & GST Settings</h1>
      <p className="text-gray-500 mb-8">Configure your business taxation for legal compliance and invoicing.</p>

      <div className="space-y-6">
        {/* Toggle GST */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <ShieldCheck className="text-indigo-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Enable GST Invoicing</h3>
              <p className="text-sm text-gray-500">Automatically calculate SGST/CGST on every service.</p>
            </div>
          </div>
          <div className="relative inline-block w-12 h-6 rounded-full bg-indigo-600">
             <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>

        {/* GST Configuration */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h3 className="font-bold text-gray-900">Tax Breakdown</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">GST Identification Number (GSTIN)</label>
                <input type="text" placeholder="27AAAAA0000A1Z5" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none uppercase" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Default Service Tax Rate (%)</label>
                <div className="relative">
                  <Percent className="absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="number" defaultValue="18" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl flex gap-3 text-blue-700">
              <Info className="h-5 w-5 shrink-0" />
              <p className="text-sm leading-relaxed">
                Most Salon services fall under the <strong>18% GST slab</strong> (9% SGST + 9% CGST). Product sales may vary based on HSN codes.
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 border-t flex justify-end">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition">
              Save Tax Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
