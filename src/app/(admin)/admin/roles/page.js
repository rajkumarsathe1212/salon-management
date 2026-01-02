
// src/app/(admin)/roles/page.js

import { Settings, Users, Check, X } from 'lucide-react';

// Mock data for System Roles
const mockRoles = [
    { name: "Super Admin", manages: "Platform setup, All Saloons, Roles", editable: false, isCore: true },
    { name: "Owner", manages: "Own Saloon, Staff, Pricing, All Modules", editable: false, isCore: true },
    { name: "Manager", manages: "Appointments, Staff Schedule, Inventory", editable: true, isCore: false },
    { name: "Staff/Stylist", manages: "Own Appointments, Clock In/Out", editable: true, isCore: false },
    { name: "Client", manages: "Own Profile, Booking Appointments", editable: false, isCore: true },
];

export default function RolesManagementPage() {
    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Roles and Permissions Management</h1>
            
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {['Role Name', 'Key Responsibilities', 'Core Role', 'Editable'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockRoles.map((role) => (
                            <tr key={role.name} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {role.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {role.manages}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                    {role.isCore ? (
                                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-500 mx-auto" />
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                    {role.editable ? (
                                        <button className="text-indigo-600 hover:text-indigo-900 p-1 rounded-md hover:bg-indigo-50" aria-label={`Edit ${role.name} permissions`}>
                                            <Settings className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <span className="text-gray-400">Fixed</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
