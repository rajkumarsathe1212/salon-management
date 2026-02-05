
"use client";
import { useState, useMemo } from 'react';
import { User, Search, Filter, Phone, Mail, Clock, Plus, IndianRupee, MoreVertical, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

const mockClients = [
    { id: 1, name: "Aisha Sharma", email: "aisha@example.com", phone: "9876543210", lastVisit: new Date(2025, 11, 10), totalVisits: 8, totalSpent: 12500, type: "VIP" },
    { id: 2, name: "Rajesh Kumar", email: "rajesh@example.com", phone: "8765432109", lastVisit: new Date(2025, 11, 5), totalVisits: 3, totalSpent: 4500, type: "Regular" },
    { id: 3, name: "Priya Singh", email: "priya@example.com", phone: "7654321098", lastVisit: new Date(2025, 10, 20), totalVisits: 15, totalSpent: 28000, type: "VIP" },
    { id: 4, name: "Vikram Gupta", email: "vikram@example.com", phone: "6543210987", lastVisit: new Date(2025, 9, 1), totalVisits: 1, totalSpent: 1500, type: "New" },
    { id: 5, name: "Sonia Reddy", email: "sonia@example.com", phone: "9988776655", lastVisit: new Date(2025, 11, 8), totalVisits: 6, totalSpent: 9200, type: "Regular" },
];

const clientTypes = ["All", "VIP", "Regular", "New"];

const typeStyles = {
    VIP: "bg-orange-50 text-orange-600 border-orange-100",
    Regular: "bg-blue-50 text-blue-600 border-blue-100",
    New: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    const filteredClients = useMemo(() => {
        let result = [...mockClients];
        if (filterType !== 'All') result = result.filter(c => c.type === filterType);
        if (searchTerm) {
            const low = searchTerm.toLowerCase();
            result = result.filter(c => 
                c.name.toLowerCase().includes(low) || c.email.toLowerCase().includes(low) || c.phone.includes(low)
            );
        }
        return result.sort((a, b) => (b.lastVisit?.getTime() || 0) - (a.lastVisit?.getTime() || 0));
    }, [searchTerm, filterType]);

    return (
        <div className="max-w-7xl mx-auto pb-10">
            {/* Header: Responsive Stack */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Clients</h1>
                    <p className="text-gray-500 text-sm">Manage your salons client relationships</p>
                </div>
                <Link href="/owner/clients/add" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 font-semibold">
                    <Plus className="h-5 w-5" /> Add New Client
                </Link>
            </div>

            {/* Filters: Responsive Flex */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search name, phone..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                        />
                    </div>
                    <div className="flex gap-2">
                        {clientTypes.map(type => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                                    filterType === type 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* desktop Table / Mobile Cards */}
            <div className="bg-white lg:rounded-2xl lg:shadow-sm lg:border border-gray-100 overflow-hidden">
                {/* Desktop View: Only visible on large screens */}
                <table className="hidden lg:table min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Client</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Last Visit</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Revenue</th>
                            <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredClients.map((client) => (
                            <tr key={client.id} className="hover:bg-indigo-50/30 transition">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-indigo-100 rounded-xl flex items-center justify-center font-bold text-indigo-600">
                                            {client.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">{client.name}</div>
                                            <div className="text-xs text-gray-500">{client.phone}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg border ${typeStyles[client.type] || 'bg-gray-50 text-gray-500 border-gray-100'}`}>
                                        {client.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {client.lastVisit ? format(client.lastVisit, 'MMM d, yyyy') : 'No visits yet'}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-bold text-gray-900 flex items-center tracking-tight">
                                        <IndianRupee className="h-3 w-3" />{client.totalSpent.toLocaleString()}
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">{client.totalVisits} visits total</div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/owner/clients/${client.id}`} className="text-indigo-600 hover:bg-indigo-600 hover:text-white p-2 rounded-lg transition inline-block">
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Mobile View: Cards (Hidden on Desktop) */}
                <div className="lg:hidden grid grid-cols-1 gap-4 p-4">
                    {filteredClients.map((client) => (
                        <div key={client.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-3">
                                    <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100">
                                        {client.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{client.name}</h3>
                                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${typeStyles[client.type] || 'bg-gray-50 text-gray-500 border-gray-100'}`}>
                                            {client.type}
                                        </span>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400"><MoreVertical className="h-5 w-5" /></button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 my-2">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Spent</p>
                                    <p className="font-bold text-gray-900 flex items-center text-sm"><IndianRupee className="h-3 w-3" />{client.totalSpent.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Visits</p>
                                    <p className="font-bold text-gray-900 text-sm">{client.totalVisits}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-xs">
                                        Last: {client.lastVisit ? format(client.lastVisit, 'MMM d') : 'Never'}
                                    </span>
                                </div>
                                <Link href={`/owner/clients/${client.id}`} className="text-indigo-600 font-bold text-sm">Profile →</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredClients.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="h-8 w-8 text-gray-300" />
                        </div>
                        <p className="text-gray-900 font-bold">No clients found</p>
                        <p className="text-sm text-gray-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
