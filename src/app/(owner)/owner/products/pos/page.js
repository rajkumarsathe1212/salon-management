
// src/app/(owner)/products/pos/page.js
"use client";

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

const mockPOSItems = [
  { id: 1, name: 'Kerastase Elixir Ultime Oil', price: 55.00, qty: 1 },
  { id: 4, name: 'Haircut & Style (Service)', price: 50.00, qty: 1 },
];

export default function POSPage() {
    const [cartItems, setCartItems] = useState(mockPOSItems); // State for POS cart

    // --- POS Logic ---
    const taxRate = 0.08; // 8% mock tax
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const handleCheckout = () => {
        alert(`Booking confirmed. Processing payment of $${total.toFixed(2)} for ${cartItems.length} items!`);
        setCartItems([]); // Clear cart
    };
    
    const removeItemFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Product Selector (Placeholder) */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Select Items</h2>
                <div className="p-10 border border-dashed rounded-lg text-center text-gray-500">
                    <p>In a real app, this area would contain product categories, a product grid, and quick service buttons.</p>
                    <p className="mt-2 text-sm">Products from the Inventory view and services from the Services section would appear here.</p>
                </div>
            </div>

            {/* Right Column: Checkout/Cart */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-2xl h-fit sticky top-20">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Checkout</h2>
                </div>
                
                <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm border-b pb-2">
                                <div>
                                    <p className="font-medium text-gray-900">{item.name}</p>
                                    <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="font-semibold text-gray-800">${(item.price * item.qty).toFixed(2)}</span>
                                    <button onClick={() => removeItemFromCart(item.id)} className="text-red-400 hover:text-red-600">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 p-4">Cart is empty.</p>
                    )}
                </div>

                <div className="p-6 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
                        <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-3 font-bold text-xl border-t border-gray-200">
                        <span>Total:</span>
                        <span className="text-indigo-600">${total.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleCheckout}
                        disabled={cartItems.length === 0}
                        className="mt-4 w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        Process Payment
                    </button>
                </div>
            </div>
        </div>
    );
}
