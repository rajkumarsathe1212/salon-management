
// src/app/(owner)/products/inventory/components/ProductModal.jsx
"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ isOpen, onClose, product = null, onSave }) {
  const [name, setName] = useState(product?.name || '');
  const [stock, setStock] = useState(product?.stock || 0);
  const [price, setPrice] = useState(product?.price || 0.00);
  const [vendor, setVendor] = useState(product?.vendor || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: product?.id,
      name,
      stock: parseInt(stock),
      price: parseFloat(price),
      vendor,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pName" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="pName" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pStock" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
              <input type="number" id="pStock" value={stock} onChange={(e) => setStock(e.target.value)} required min="0" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="pPrice" className="block text-sm font-medium text-gray-700">Price ($)</label>
              <input type="number" id="pPrice" value={price} onChange={(e) => setPrice(e.target.value)} required min="0.01" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div>
            <label htmlFor="pVendor" className="block text-sm font-medium text-gray-700">Vendor</label>
            <input type="text" id="pVendor" value={vendor} onChange={(e) => setVendor(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>

          <button type="submit" className="w-full py-2 mt-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            {product ? 'Save Changes' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}
