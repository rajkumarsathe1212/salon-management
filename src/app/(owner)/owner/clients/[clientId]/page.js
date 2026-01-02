
// src/app/(owner)/clients/[clientId]/page.js

"use client";
import { useParams, useRouter } from 'next/navigation';
import { User, Phone, Mail, Clock, Calendar, Scissors, IndianRupee, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

// Mock Data (Should ideally be fetched using the ID)
const mockClientsData = [
    { id: '1', name: "Aisha Sharma", email: "aisha@example.com", phone: "9876543210", joined: new Date(2023, 5, 15), type: "VIP", lastVisit: new Date(2025, 11, 10), totalVisits: 8, totalSpent: 12500 },
    { id: '2', name: "Rajesh Kumar", email: "rajesh@example.com", phone: "8765432109", joined: new Date(2024, 1, 28), type: "Regular", lastVisit: new Date(2025, 11, 5), totalVisits: 3, totalSpent: 4500 },
    // ... add others or simplify
];

// Mock Appointment History
const mockHistory = [
    { id: 101, service: "Haircut & Styling", staff: "Priya Mehta", date: new Date(2025, 11, 10), price: 800 },
    { id: 102, service: "Full Hair Color", staff: "Neha Singh", date: new Date(2025, 8, 5), price: 2500 },
    { id: 103, service: "Beard Trim", staff: "Rahul Verma", date: new Date(2025, 5, 15), price: 300 },
];

export default function ClientProfilePage() {
    const router = useRouter();
    const params = useParams();
    const { clientId } = params;

    // Simulate finding the client by ID from the mock data
    const client = mockClientsData.find(c => c.id === clientId);

    if (!client) {
        return (
            <div className="text-center p-10 bg-white rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-red-500">Client Not Found</h2>
                <p className="text-gray-600 mt-2">Could not locate client with ID: **{clientId}**.</p>
                <button 
                    onClick={() => router.push('/owner/clients')} 
                    className="mt-4 text-indigo-600 hover:text-indigo-800 flex items-center justify-center mx-auto"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" /> Back to Client List
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="mb-8 flex items-center gap-4">
                <button 
                    onClick={() => router.back()} 
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition"
                >
                    <ArrowLeft className="h-6 w-6" />
                </button>
                <h1 className="text-3xl font-bold text-gray-900">{client.name}'s Profile</h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Details and Quick Stats */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center gap-4 mb-4 border-b pb-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xl font-bold">
                                {client.name.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{client.name}</h2>
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${client.type === 'VIP' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700'}`}>
                                    {client.type} Client
                                </span>
                            </div>
                        </div>
                        
                        <div className="space-y-3 text-sm text-gray-700">
                            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-500" /> {client.email}</p>
                            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-500" /> +91 {client.phone}</p>
                            <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-indigo-500" /> Joined: {format(client.joined, 'MMM yyyy')}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 border-b pb-3">Loyalty Summary</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-indigo-50 rounded-lg text-center">
                                <p className="text-3xl font-bold text-indigo-700">{client.totalVisits}</p>
                                <p className="text-sm text-gray-600">Total Visits</p>
                            </div>
                            <div className="p-3 bg-indigo-50 rounded-lg text-center">
                                <p className="text-xl font-bold text-indigo-700 flex items-center justify-center">
                                    <IndianRupee className="h-5 w-5 mr-1" />{client.totalSpent.toLocaleString('en-IN')}
                                </p>
                                <p className="text-sm text-gray-600">Total Spent</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Appointment History */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 border-b pb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-indigo-600" /> Appointment History
                    </h3>

                    <ul className="divide-y divide-gray-100">
                        {mockHistory.map((app) => (
                            <li key={app.id} className="py-4 flex justify-between items-center hover:bg-gray-50 px-2 rounded-md transition">
                                <div className="flex items-center gap-4">
                                    <div className="text-lg font-semibold text-gray-900 w-24">{format(app.date, 'MMM d, yyyy')}</div>
                                    <div>
                                        <p className="font-medium">{app.service}</p>
                                        <p className="text-sm text-gray-500">Staff: {app.staff}</p>
                                    </div>
                                </div>
                                <span className="text-lg font-bold text-indigo-600 flex items-center">
                                    <IndianRupee className="h-4 w-4 mr-1" />{app.price}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {mockHistory.length === 0 && (
                        <p className="text-center text-gray-500 py-6">No previous appointment history found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
