
// src/app/(client)/client/appointments/(components)/PastAppointments.jsx
import { CheckCircle2, RotateCcw, Star } from 'lucide-react';

export default function PastAppointments() {
    const pastAppointments = [
        {
            id: 101,
            service: "Beard Trim & Hot Towel",
            specialist: "Lisa K.",
            date: "Nov 12, 2025",
            status: "Completed",
            price: "₹600"
        }
    ];

    if (pastAppointments.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400 italic">
                No past appointment history found.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {pastAppointments.map((apt) => (
                <div key={apt.id} className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="bg-green-100 p-3 rounded-full hidden sm:block">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{apt.service}</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <p className="text-sm text-gray-500">{apt.date}</p>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <p className="text-sm font-bold text-indigo-600">{apt.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold hover:bg-white transition flex items-center justify-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" /> Review
                        </button>
                        <button className="flex-1 md:flex-none px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition flex items-center justify-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Rebook
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
