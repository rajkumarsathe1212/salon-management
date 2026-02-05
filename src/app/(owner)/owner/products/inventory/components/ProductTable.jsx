
// src/app/(owner)/products/inventory/components/ProductTable.jsx
import { Edit2, Trash2, AlertTriangle, Building2 } from 'lucide-react';

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Desktop Table */}
      <table className="hidden md:table min-w-full divide-y divide-gray-100">
        <thead className="bg-gray-50/50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Product</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Stock</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Price</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Vendor</th>
            <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product) => (
            <tr key={product.id} className={`hover:bg-gray-50 transition ${product.stock < 10 ? 'bg-red-50/50' : ''}`}>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <span className={`font-mono font-bold ${product.stock < 10 ? 'text-red-600' : 'text-gray-700'}`}>
                        {product.stock}
                    </span>
                    {product.stock < 10 && <AlertTriangle className="h-4 w-4 text-red-500" />}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.vendor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button onClick={() => onEdit(product)} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg mr-1"><Edit2 className="h-4 w-4" /></button>
                <button onClick={() => onDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="h-4 w-4" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card List */}
      <div className="md:hidden divide-y divide-gray-100">
        {products.map((product) => (
          <div key={product.id} className={`p-4 ${product.stock < 10 ? 'bg-red-50/40' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-900 leading-tight flex-1 pr-4">{product.name}</h3>
              <div className="flex gap-1 shrink-0">
                <button onClick={() => onEdit(product)} className="p-2 text-indigo-600 active:bg-indigo-100 rounded-lg"><Edit2 className="h-4 w-4" /></button>
                <button onClick={() => onDelete(product.id)} className="p-2 text-red-600 active:bg-red-100 rounded-lg"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="bg-white p-2 rounded-lg border border-gray-100">
                <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Stock</p>
                <p className={`font-bold ${product.stock < 10 ? 'text-red-600' : 'text-gray-900'}`}>{product.stock}</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-100">
                <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Price</p>
                <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-gray-100">
                <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Vendor</p>
                <p className="text-xs font-medium text-gray-600 truncate">{product.vendor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
          <div className="p-12 text-center text-gray-400 font-medium">No products found.</div>
      )}
    </div>
  );
}
