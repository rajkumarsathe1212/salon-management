
// src/app/(owner)/products/page.js (MAIN ENTRY)
"use client";

import { useState } from 'react';
import { Package, DollarSign } from 'lucide-react';

// Import the sub-pages
import InventoryPage from './inventory/page';
import POSPage from './pos/page';


export default function OwnerProductsWrapper() {
  const [view, setView] = useState('inventory'); // 'inventory' or 'pos'

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {view === 'inventory' ? 'Inventory Management' : 'Point of Sale (POS)'}
      </h1>

      {/* View Switcher */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setView('inventory')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            view === 'inventory' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Package className="h-5 w-5 inline mr-2" /> Inventory
        </button>
        <button
          onClick={() => setView('pos')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            view === 'pos' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <DollarSign className="h-5 w-5 inline mr-2" /> POS Checkout
        </button>
      </div>

      {/* Render Active View */}
      {view === 'inventory' ? <InventoryPage /> : <POSPage />}
    </>
  );
}
