// src/app/(client)/client/appointments/page.js
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import UpcomingAppointments from './(components)/UpcomingAppointments';
import PastAppointments from './(components)/PastAppointments';

export default function AppointmentsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Get the active tab from URL, default to 'upcoming'
    const activeTab = searchParams.get('tab') || 'upcoming';

    // Function to change tab and update URL
    const setTab = (tabName) => {
        router.push(`/client/appointments?tab=${tabName}`, { scroll: false });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                My Appointments
            </h1>

            {/* Tabs List */}
            <div className="flex gap-4 sm:gap-8 border-b mb-8 overflow-x-auto no-scrollbar" role="tablist">
                <button
                    role="tab"
                    aria-selected={activeTab === 'upcoming'}
                    onClick={() => setTab('upcoming')}
                    className={`pb-4 border-b-2 font-semibold transition-all duration-200 ${
                        activeTab === 'upcoming'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Upcoming
                </button>

                <button
                    role="tab"
                    aria-selected={activeTab === 'past'}
                    onClick={() => setTab('past')}
                    className={`pb-4 border-b-2 font-semibold transition-all duration-200 ${
                        activeTab === 'past'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                >
                    Past Visits
                </button>
            </div>

            {/* Content Section with simple fade-in effect via Tailwind */}
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                {activeTab === 'upcoming' ? (
                    <UpcomingAppointments />
                ) : (
                    <PastAppointments />
                )}
            </div>
        </div>
    );
}
