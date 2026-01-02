
// src/app/(client)/booking/page.js
"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { format, addDays, subDays, isSameDay, startOfWeek, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';

// Mock Data for services and availability
const services = [
  { id: 1, name: "Haircut & Style", price: 50, duration: 60 },
  { id: 2, name: "Full Color Treatment", price: 120, duration: 120 },
  { id: 3, name: "Manicure & Pedicure", price: 75, duration: 90 },
];

const mockAvailableSlots = [
  '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

export default function ClientBookingPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Calendar logic (Reused from Owner Calendar, simplified)
  const calendarStart = startOfWeek(selectedDate, { weekStartsOn: 0 }); 
  const calendarEnd = endOfMonth(selectedDate);
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  const isAvailableDay = (day) => day.getDay() !== 6; // Mock: Salon closed on Saturday (6)

  const handleBookingSubmit = () => {
    // In a real app: Send API request with selectedService, selectedDate, selectedTime
    alert(`Booking confirmed for ${selectedService.name} on ${format(selectedDate, 'PPP')} at ${selectedTime}!`);
    setStep(1); // Reset form
    setSelectedService(null);
    setSelectedTime(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
      
      {/* Step Indicator */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`flex items-center ${s <= step ? 'text-indigo-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${s === step ? 'bg-indigo-600 text-white border-indigo-600' : s < step ? 'bg-indigo-100 border-indigo-600' : 'bg-white border-gray-400'}`}>
              {s < step ? <Check className="h-5 w-5" /> : s}
            </div>
            {s < 3 && <div className={`h-1 w-20 ${s < step ? 'bg-indigo-600' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8">
        {/* --- STEP 1: Select Service --- */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">1. Choose a Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-6 border-2 rounded-xl text-left transition duration-150 ${
                    selectedService?.id === service.id ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-600' : 'border-gray-200 hover:border-indigo-400'
                  }`}
                >
                  <p className="font-bold text-xl">{service.name}</p>
                  <p className="text-sm text-gray-500 mt-1">Duration: {service.duration} mins</p>
                  <p className="text-2xl font-extrabold text-indigo-700 mt-2">${service.price}</p>
                </button>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 transition"
              >
                Next: Select Date & Time
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 2: Select Date and Time --- */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">2. Select Date & Time</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Date Picker (Calendar) */}
                <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{format(selectedDate, 'MMMM yyyy')}</h3>
                        <div className="flex gap-2">
                            <button onClick={() => setSelectedDate(subDays(selectedDate, 30))} className="p-1 hover:bg-gray-100 rounded-lg"><ChevronLeft className="w-5 h-5" /></button>
                            <button onClick={() => setSelectedDate(addDays(selectedDate, 30))} className="p-1 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 text-center">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="font-bold text-gray-600 py-2 text-sm">{day}</div>
                        ))}
                        {days.map(day => {
                            const dayNumber = format(day, 'd');
                            const isTodayValue = isSameDay(day, new Date());
                            const isSelected = isSameDay(day, selectedDate);
                            const isCurrentMonth = isSameMonth(day, selectedDate);
                            const isAvailable = isAvailableDay(day);

                            return (
                                <button
                                    key={dayNumber + format(day, 'MM')}
                                    onClick={() => isCurrentMonth && isAvailable && setSelectedDate(day)}
                                    disabled={!isCurrentMonth || !isAvailable}
                                    className={`p-1 h-10 w-10 flex items-center justify-center rounded-full text-center transition duration-100
                                        ${!isCurrentMonth ? 'text-gray-300' : ''}
                                        ${!isAvailable ? 'text-gray-400 cursor-not-allowed line-through' : 'hover:bg-indigo-100'}
                                        ${isTodayValue && isCurrentMonth && !isSelected ? 'border-2 border-indigo-400 text-indigo-600 font-bold' : ''}
                                        ${isSelected ? 'bg-indigo-600 text-white font-bold shadow-md' : ''}
                                    `}
                                >
                                    {dayNumber}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Time Slot Selector */}
                <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Available Slots for {format(selectedDate, 'MMM d')}</h3>
                    <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
                        {mockAvailableSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`px-4 py-2 border rounded-lg transition duration-100 text-sm font-medium
                                    ${selectedTime === slot ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white text-gray-800 hover:bg-indigo-50'}`
                                }
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                    {mockAvailableSlots.length === 0 && (
                        <p className="text-gray-500">No available slots on this day.</p>
                    )}
                </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Back
              </button>
              <button
                onClick={() => selectedTime && setStep(3)}
                disabled={!selectedTime}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 transition"
              >
                Next: Review & Confirm
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 3: Review and Confirm --- */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">3. Review & Confirm</h2>
            <div className="space-y-4 p-6 border border-indigo-200 bg-indigo-50 rounded-xl">
                <p className="text-lg font-bold">Service: <span className="text-indigo-700">{selectedService.name}</span></p>
                <p className="text-lg font-bold">Date: <span className="text-indigo-700">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span></p>
                <p className="text-lg font-bold">Time: <span className="text-indigo-700">{selectedTime}</span></p>
                <p className="text-2xl font-extrabold pt-4 border-t border-indigo-200">Total Price: ${selectedService.price.toFixed(2)}</p>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Back to Selection
              </button>
              <button
                onClick={handleBookingSubmit}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
