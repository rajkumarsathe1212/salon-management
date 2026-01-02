
// src/app/(client)/client/appointments/(components)/UpcomingAppointments.jsx
import { Calendar, Clock, MapPin, MoreVertical } from 'lucide-react';

export default function UpcomingAppointments() {
    // Mock data - eventually this will come from your database/API
    const appointments = [
        {
            id: 1,
            service: "Signature Haircut & Styling",
            specialist: "Marcus D.",
            date: "Dec 24, 2025",
            time: "10:00 AM",
            location: "Main Street Branch",
            price: "₹1,200"
        }
    ];

    if (appointments.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Calendar className="text-gray-400 w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No upcoming appointments</h3>
                <p className="text-gray-500 mb-6">Time for a fresh look? Book your next session now.</p>
                <button className="bg-indigo-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                    Book Now
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {appointments.map((apt) => (
                <div key={apt.id} className="bg-white border rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
                                Confirmed
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mt-3">{apt.service}</h3>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Calendar className="w-5 h-5 text-indigo-500" />
                            <span className="text-sm">{apt.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <Clock className="w-5 h-5 text-indigo-500" />
                            <span className="text-sm">{apt.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="w-5 h-5 text-indigo-500" />
                            <span className="text-sm">{apt.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t gap-4">
                        <p className="text-sm text-gray-500">
                            With <span className="font-semibold text-gray-900">{apt.specialist}</span>
                        </p>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none px-6 py-2 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition">
                                Reschedule
                            </button>
                            <button className="flex-1 sm:flex-none px-6 py-2 text-red-600 border border-transparent hover:bg-red-50 rounded-xl text-sm font-semibold transition">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
