
// src/app/(admin)/admin/dashboard/page.js
export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">System Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500 uppercase">Total Salons</p>
                    <p className="text-3xl font-bold text-indigo-600">124</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500 uppercase">Active Subscriptions</p>
                    <p className="text-3xl font-bold text-green-600">98</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border">
                    <p className="text-sm text-gray-500 uppercase">Platform Revenue</p>
                    <p className="text-3xl font-bold text-gray-800">₹45,000</p>
                </div>
            </div>
        </div>
    );
}
