
// src/app/(owner)/products/inventory/page.js
"use client";
import { useState } from 'react';
import { Plus, Search, Package } from 'lucide-react';
import ProductModal from './components/ProductModal';
import ProductTable from './components/ProductTable';

const initialProducts = [
  { id: 1, name: 'Kerastase Elixir Ultime Oil', stock: 15, price: 55.00, vendor: 'ProSupply' },
  { id: 2, name: 'L\'Oréal Professionnel Shampoo', stock: 32, price: 22.50, vendor: 'Loreal' },
  { id: 3, name: 'Hair Color Developer 20 Vol', stock: 5, price: 12.00, vendor: 'ProSupply' },
];

export default function InventoryPage() {
  const [products, setProducts] = useState(initialProducts); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
      setProducts(products.map(p => p.id === newProductData.id ? newProductData : p));
    } else {
      const newProduct = { ...newProductData, id: Date.now() };
      setProducts([...products, newProduct]);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
                <Package className="text-white h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
              onClick={handleOpenAddModal}
              className="p-2.5 md:px-4 md:py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition flex items-center shrink-0 shadow-lg shadow-indigo-100"
          >
            <Plus className="h-5 w-5 md:mr-2" /> 
            <span className="hidden md:inline font-semibold">Add Product</span>
          </button>
        </div>
      </div>

      <ProductTable 
        products={products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))}
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
