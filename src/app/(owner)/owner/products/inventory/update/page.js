
"use client";
import { useState } from 'react';
import { Package, Plus, Trash2, Save, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function UpdateInventoryPage() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/owner/products/inventory" className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stock Purchase Log</h1>
          <p className="text-sm text-gray-500">Record new stock arrivals and purchase costs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vendor & Invoice Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Package className="h-5 w-5 text-indigo-600" /> Purchase Details
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Vendor Name</label>
                <input type="text" placeholder="e.g. L'Oreal India" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Invoice Number</label>
                <input type="text" placeholder="#INV-9901" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Purchase Date</label>
                <input type="date" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Selection Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search product to add..." className="w-full pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none" />
              </div>
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-xs text-gray-400 uppercase bg-white">
                  <tr>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4">Qty</th>
                    <th className="px-6 py-4">Unit Cost</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-800">Shampoo 1L</td>
                    <td className="px-6 py-4"><input type="number" defaultValue="12" className="w-16 p-1 border rounded text-center" /></td>
                    <td className="px-6 py-4">₹850</td>
                    <td className="px-6 py-4 text-right"><button className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 border-t flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-500">Total Items:</span> <span className="font-bold">12</span>
              </div>
              <div className="text-xl font-black text-indigo-600">
                ₹10,200
              </div>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition flex items-center justify-center gap-2">
            <Save className="h-5 w-5" /> Update Inventory Levels
          </button>
        </div>
      </div>
    </div>
  );
}
