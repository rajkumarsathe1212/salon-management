
// src/app/(admin)/saloons/page.js

import Link from 'next/link';
import { Plus, Edit2, Trash2 } from 'lucide-react';

// Mock data for Saloons
const mockSaloons = [
    { id: 1, name: "The Royal Trim", owner: "Anya Sharma", email: "anya@royaltrim.com", status: "Active", plan: "Professional" },
    { id: 2, name: "Style Hub Studio", owner: "Vikram Singh", email: "vikram@stylehub.com", status: "Active", plan: "Standard" },
    { id: 3, name: "Elite Cuts & Color", owner: "Priya Menon", email: "priya@elitecc.com", status: "Suspended", plan: "Professional" },
    { id: 4, name: "The Gentleman's Cut", owner: "Rajesh Kumar", email: "rajesh@tgc.com", status: "Trial", plan: "Standard" },
];

export default function SaloonsListPage() {
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Registered Saloons</h1>
                <Link 
                    href="/admin/salons/register" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition"
                >
                    <Plus className="w-5 h-5" /> Register New Saloon
                </Link>
            </div>

            {/* Saloons List Table */}
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Saloon Name', 'Owner/Email', 'Plan', 'Status', 'Actions'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockSaloons.map((saloon) => (
                            <tr key={saloon.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {saloon.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <p className="font-medium">{saloon.owner}</p>
                                    <p className="text-xs text-indigo-600">{saloon.email}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        saloon.plan === 'Professional' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                                    }`}>
                                        {saloon.plan}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        saloon.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                        saloon.status === 'Suspended' ? 'bg-red-100 text-red-800' : 
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {saloon.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3 p-1 rounded-md hover:bg-indigo-50" aria-label="Edit">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50" aria-label="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
