
// src/app/(owner)/appointments/page.js
"use client";
import { useState } from 'react';
// FIX: Removed unused icons (Clock, User, Scissors)
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'; 
// FIX: Added 'addMonths' and 'subMonths' for cleaner navigation
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, addDays, subMonths, startOfWeek } from 'date-fns'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AppointmentsCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const router = useRouter();

    // --- Calendar Logic ---
    // Start the day range from the start of the week of the first day of the month
    const monthStart = startOfMonth(currentDate);
    // FIX: startOfWeek is needed to correctly align the calendar grid to Sunday
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); 
    const monthEnd = endOfMonth(currentDate);
    // End the range on the last day of the week of the last day of the month
    const calendarEnd = endOfMonth(currentDate); 
    
    // Create an array of all days to display (including previous/next month days)
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
    // --- End Calendar Logic ---


    // Mock booked slots per day (Keep this as-is)
    const bookings = {
        [format(addDays(new Date(), 2), 'yyyy-MM-dd')]: 8, // Today + 2 days
        [format(addDays(new Date(), 5), 'yyyy-MM-dd')]: 12, // Today + 5 days
        // Mock data for a fixed date (assuming 2025-04 is the mock month)
        "2025-04-10": 15, 
        "2025-04-15": 20, 
    };

    const getBookingCount = (date) => bookings[format(date, 'yyyy-MM-dd')] || 0;

    // FIX: Navigation handlers using date-fns addMonths/subMonths
    const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const goToToday = () => setCurrentDate(new Date());

    return (
        <>
            <div className="mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Appointment Calendar</h1>
                <Link className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition" href="/owner/appointments/add">
                    <Plus className="h-5 w-5" /> New Booking
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Calendar Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {format(currentDate, 'MMMM yyyy')}
                    </h2>
                    <div className="flex gap-3">
                        <button 
                            onClick={goToPreviousMonth} // FIX: Use new handler
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                            aria-label="Previous month"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        
                        <button 
                            onClick={goToToday} // FIX: Use new handler
                            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition"
                        >
                            Today
                        </button>
                        
                        <button 
                            onClick={goToNextMonth} // FIX: Use new handler
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                            aria-label="Next month"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Day Headers (Sun - Sat) */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="font-bold text-gray-600 py-3 text-sm">{day}</div>
                    ))}

                    {/* Day Cells */}
                    {days.map(day => {
                        const count = getBookingCount(day);
                        // FIX: Use isToday from date-fns for cleaner logic
                        const isTodayValue = isToday(day); 

                        return (
                        <div
                            key={format(day, 'yyyy-MM-dd')} // FIX: Use a stable unique key
                            className={`p-3 rounded-xl border transition hover:shadow-md cursor-pointer h-24 flex flex-col justify-start items-center
                            ${!isSameMonth(day, currentDate) ? 'text-gray-400 bg-gray-50 border-transparent' : ''}
                            ${isSameMonth(day, currentDate) && !isTodayValue ? 'bg-white hover:bg-indigo-50 border-gray-200' : ''}
                            ${isTodayValue ? 'bg-indigo-600 text-white border-indigo-700' : ''}
                            `}
                        >
                            <div className={`font-semibold text-lg ${isTodayValue ? 'text-white' : 'text-gray-900'}`}>{format(day, 'd')}</div>
                            {count > 0 && (
                            <div className={`text-xs mt-1 px-2 py-1 rounded-full font-medium ${isTodayValue ? 'bg-white text-indigo-600' : 'bg-indigo-100 text-indigo-700'}`}>
                                {count} bookings
                            </div>
                            )}
                        </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
