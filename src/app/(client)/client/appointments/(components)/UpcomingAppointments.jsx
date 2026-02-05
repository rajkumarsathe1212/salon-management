
// src/app/(client)/client/appointments/(components)/UpcomingAppointments.jsx
import { Calendar, Clock, MapPin, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function UpcomingAppointments() {

    const [showCancelModal, setShowCancelModal] = useState(false);
    const [appointmentToCancel, setAppointmentToCancel] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCancelClick = (apt) => {
        setAppointmentToCancel(apt);
        setShowCancelModal(true);
    };

    const confirmCancellation = async () => {
        try {
            // 1. Start loading
            setIsSubmitting(true); 

            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Appointment Cancelled:", appointmentToCancel.id);

            // 4. Success feedback
            alert("Appointment cancelled successfully.");
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            // 5. Cleanup
            setIsSubmitting(false);
            setShowCancelModal(false);
            setAppointmentToCancel(null);
        }
    };

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
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <Link 
                                href={`/client/booking?serviceId=${apt.id}`}
                                className="flex-1 sm:flex-none px-6 py-2 border border-indigo-100 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold hover:bg-indigo-100 transition text-center"
                            >
                                Reschedule
                            </Link>
                            <button className="w-full sm:px-6 py-2.5 text-gray-400 hover:text-red-600 rounded-xl text-sm font-bold transition" onClick={() => handleCancelClick(apt)} >
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {showCancelModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl animate-in zoom-in-95">
                        <h3 className="text-xl font-bold text-gray-900">Cancel Appointment?</h3>
                        <p className="text-gray-500 mt-2">
                            Are you sure you want to cancel your <span className="font-semibold text-gray-900">{appointmentToCancel?.service}</span>?
                        </p>
                        <div className="flex gap-3 mt-6">
                            <button 
                                onClick={() => setShowCancelModal(false)}
                                className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold"
                            >
                                No, keep it
                            </button>
                            <button 
                                onClick={confirmCancellation}
                                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-200"
                            >
                                Yes, cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
