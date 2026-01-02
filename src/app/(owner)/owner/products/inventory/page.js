
// src/app/(owner)/products/inventory/page.js
"use client";

import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import ProductModal from './components/ProductModal';
import ProductTable from './components/ProductTable';

let currentProductId = 4;
const initialProducts = [
  { id: 1, name: 'Kerastase Elixir Ultime Oil', stock: 15, price: 55.00, vendor: 'ProSupply' },
  { id: 2, name: 'L\'Oréal Professionnel Shampoo', stock: 32, price: 22.50, vendor: 'Loreal' },
  { id: 3, name: 'Hair Color Developer 20 Vol', stock: 5, price: 12.00, vendor: 'ProSupply' },
];

export default function InventoryPage() {
  const [products, setProducts] = useState(initialProducts); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); 

  // --- CRUD Operations ---

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };
  
  const handleSaveProduct = (newProductData) => {
    if (newProductData.id) {
      // EDIT Logic
      setProducts(products.map(p => p.id === newProductData.id ? newProductData : p));
      console.log('Product Updated:', newProductData);
    } else {
      // ADD Logic
      const newProduct = { ...newProductData, id: currentProductId++ };
      setProducts([...products, newProduct]);
      console.log('Product Added:', newProduct);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      setProducts(products.filter(p => p.id !== id));
      console.log(`Product ID ${id} deleted.`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-72" />
        </div>
        <button 
            onClick={handleOpenAddModal}
            className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition flex items-center"
        >
          <Plus className="h-5 w-5 mr-1" /> Add New Product
        </button>
      </div>

      <ProductTable 
        products={products}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteProduct}
      />
      
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
}
