
// src/app/(owner)/products/inventory/components/ProductTable.jsx
import { Edit2, Trash2 } from 'lucide-react';

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className={product.stock < 10 ? 'bg-red-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {product.stock} {product.stock < 10 && <span className="ml-2 text-xs font-bold text-red-600">(Low!)</span>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.vendor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button 
                    onClick={() => onEdit(product)} 
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                >
                  <Edit2 className="h-4 w-4 inline" /> Edit
                </button>
                <button 
                    onClick={() => onDelete(product.id)}
                    className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-4 w-4 inline" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && (
          <div className="text-center py-10 text-gray-500 border-t border-gray-200">No products found. Add your first product!</div>
      )}
    </div>
  );
}
