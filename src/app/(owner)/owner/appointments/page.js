
// src/app/(owner)/appointments/page.js
"use client";
import { useState } from 'react';
// FIX: Removed unused icons (Clock, User, Scissors)
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'; 
// FIX: Added 'addMonths' and 'subMonths' for cleaner navigation
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, addDays, subMonths, startOfWeek } from 'date-fns'; 
import Link from 'next/link';

export default function AppointmentsCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

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
        <div className="max-w-full overflow-hidden">
            {/* Page Header - Responsive stacking */}
            <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Appointments</h1>
                <Link className="w-full sm:w-auto bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 transition shadow-md" href="/owner/appointments/add">
                    <Plus className="h-5 w-5" /> <span>New Booking</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Calendar Controls */}
                <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-100">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                        {format(currentDate, 'MMMM yyyy')}
                    </h2>
                    <div className="flex items-center gap-1 md:gap-3">
                        <button onClick={goToPreviousMonth} className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={goToToday} className="px-3 py-1.5 md:px-4 md:py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold hover:bg-indigo-100 transition">
                            Today
                        </button>
                        <button onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                    {/* Day Headers - Single letter on mobile, Full on desktop */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="bg-white font-bold text-gray-500 py-2 md:py-4 text-[10px] md:text-sm uppercase tracking-widest text-center">
                            <span className="hidden md:inline">{day}</span>
                            <span className="md:hidden">{day.charAt(0)}</span>
                        </div>
                    ))}

                    {/* Day Cells */}
                    {days.map(day => {
                        const count = getBookingCount(day);
                        const isTodayValue = isToday(day); 
                        const isCurrentMonth = isSameMonth(day, currentDate);

                        return (
                            <div
                                key={format(day, 'yyyy-MM-dd')}
                                className={`relative min-h-[80px] md:min-h-[120px] p-1 md:p-2 bg-white transition cursor-pointer hover:bg-gray-50
                                ${!isCurrentMonth ? 'bg-gray-50/50' : ''}
                                `}
                            >
                                {/* Date Number */}
                                <div className="flex justify-between items-start">
                                    <span className={`
                                        flex items-center justify-center w-7 h-7 md:w-8 md:h-8 text-xs md:text-sm font-semibold rounded-full
                                        ${isTodayValue ? 'bg-indigo-600 text-white' : 'text-gray-700'}
                                        ${!isCurrentMonth ? 'text-gray-300' : ''}
                                    `}>
                                        {format(day, 'd')}
                                    </span>
                                </div>

                                {/* Bookings Indicators */}
                                <div className="mt-1 md:mt-2 space-y-1">
                                    {count > 0 && (
                                        <>
                                            {/* Desktop: Text badge */}
                                            <div className="hidden md:block px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded-md truncate">
                                                {count} Bookings
                                            </div>
                                            {/* Mobile: Simple Dot or Mini-badge */}
                                            <div className="md:hidden flex justify-center">
                                                <div className="w-5 h-5 flex items-center justify-center bg-indigo-600 text-white text-[10px] rounded-full font-bold shadow-sm">
                                                    {count}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
