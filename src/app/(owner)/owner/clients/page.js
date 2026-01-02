
// src/app/(owner)/clients/page.js

"use client";
import { useState, useMemo } from 'react';
import { User, Search, Filter, Phone, Mail, Clock, Plus, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

// --- Mock Data ---
const mockClients = [
    { id: 1, name: "Aisha Sharma", email: "aisha@example.com", phone: "9876543210", lastVisit: new Date(2025, 11, 10), totalVisits: 8, totalSpent: 12500, type: "VIP" },
    { id: 2, name: "Rajesh Kumar", email: "rajesh@example.com", phone: "8765432109", lastVisit: new Date(2025, 11, 5), totalVisits: 3, totalSpent: 4500, type: "Regular" },
    { id: 3, name: "Priya Singh", email: "priya@example.com", phone: "7654321098", lastVisit: new Date(2025, 10, 20), totalVisits: 15, totalSpent: 28000, type: "VIP" },
    { id: 4, name: "Vikram Gupta", email: "vikram@example.com", phone: "6543210987", lastVisit: new Date(2025, 9, 1), totalVisits: 1, totalSpent: 1500, type: "New" },
    { id: 5, name: "Sonia Reddy", email: "sonia@example.com", phone: "9988776655", lastVisit: new Date(2025, 11, 8), totalVisits: 6, totalSpent: 9200, type: "Regular" },
];

const clientTypes = ["All", "VIP", "Regular", "New"];

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    // --- Filtered and Sorted Clients Logic ---
    const filteredClients = useMemo(() => {
        let result = mockClients;

        // 1. Filter by Client Type
        if (filterType !== 'All') {
            result = result.filter(client => client.type === filterType);
        }

        // 2. Filter by Search Term (Name, Email, or Phone)
        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            result = result.filter(client => 
                client.name.toLowerCase().includes(lowerCaseSearch) ||
                client.email.toLowerCase().includes(lowerCaseSearch) ||
                client.phone.includes(lowerCaseSearch)
            );
        }

        // 3. Sort by Last Visit (Newest first)
        result.sort((a, b) => b.lastVisit - a.lastVisit);
        
        return result;
    }, [searchTerm, filterType]);


    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Client Relationship Management</h1>
                <Link href="/owner/appointments/add" className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition">
                    <Plus className="h-5 w-5" /> Add New Client
                </Link>
            </div>

            {/* Filters and Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
                
                {/* Search Input */}
                <div className="relative flex-1 w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by name, email, or phone..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Filter Selector */}
                <div className="relative w-full md:w-48">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select 
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                    >
                        {clientTypes.map(type => (
                            <option key={type} value={type}>{type} Clients</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Clients Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Details</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Visits</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                            <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredClients.map((client) => (
                            <tr key={client.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <User className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                                            <div className="text-xs text-gray-500 flex items-center gap-1"><Mail className="h-3 w-3" /> {client.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {format(client.lastVisit, 'MMM d, yyyy')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${client.type === 'VIP' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {client.totalVisits}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{client.totalSpent.toLocaleString('en-IN')}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/clients/${client.id}`} className="text-indigo-600 hover:text-indigo-900 transition">
                                        View Profile
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredClients.length === 0 && (
                    <div className="p-10 text-center text-gray-500">No clients found matching your search criteria.</div>
                )}
            </div>
        </>
    );
}
