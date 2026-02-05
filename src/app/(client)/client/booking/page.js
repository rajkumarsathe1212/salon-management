
// src/app/(client)/booking/page.js
"use client";

import { useState, useMemo } from 'react';
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Check, Clock, Calendar as CalendarIcon, Loader2, Scissors, ArrowLeft } from 'lucide-react';
import { format, addDays, subDays, isSameDay, startOfWeek, endOfMonth, eachDayOfInterval, isSameMonth, parse, addMinutes, startOfMonth, endOfWeek } from 'date-fns';
import { SERVICES } from '@/lib/mock-data';

export default function ClientBookingPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const filteredTimeSlots = useMemo(() => {
    const slots = [];

    let current = parse("08:00", "HH:mm", new Date());
    const end = parse("23:30", "HH:mm", new Date());
    const now = new Date();

    while (current <= end) {
      const timeString = format(current, "hh:mm aa");
      
      // Check: If selected day is today, is this time slot in the past?
      if (isSameDay(selectedDate, new Date())) {
        const [hourMinute, ampm] = timeString.split(' ');
        let [hours, minutes] = hourMinute.split(':').map(Number);
        
        if (ampm === 'PM' && hours !== 12) hours += 12;
        if (ampm === 'AM' && hours === 12) hours = 0;
        
        const slotDate = new Date();
        slotDate.setHours(hours, minutes, 0, 0);

        // Only add if the slot is at least 30 mins from now (buffer)
        if (slotDate > now) {
          slots.push(timeString);
        }
      } else {
        // If it's tomorrow or day after, show all slots
        slots.push(timeString);
      }

      current = addMinutes(current, 30);
    }
    return slots;
  }, [selectedDate]);

  // --- CALENDAR LOGIC ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to compare only dates
  const threeDaysAhead = addDays(today, 2);

  // Generate all days in the current view, but we will filter them
  const days = eachDayOfInterval({ 
    start: today, 
    end: threeDaysAhead 
  });

  const handleBookingSubmit = () => {
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      alert(`Confirmed: ${selectedService.name} at ${selectedTime}`);
      setIsSubmitting(false);
      setStep(1);
      setSelectedService(null);
      setSelectedTime(null);
      router.push('/client/appointments');
    }, 1500);
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => step > 1 ? setStep(step - 1) : router.back()}
          className="p-2 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Book Appointment</h1>
          <p className="text-gray-500 text-sm font-medium">Quick & easy salon booking</p>
        </div>
      </div>
      
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
          <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <Scissors className="h-5 w-5 text-indigo-600" /> Choose a Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
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

        {step === 2 && (
          <div className="p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-indigo-600" /> Pick Date & Time
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Date Picker (3-Day Card View) */}
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">
                  Select Date
                </h3>
                <div className="flex gap-3">
                  {days.map((day, idx) => {
                    const isSelected = isSameDay(day, selectedDate);
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedDate(day);
                          setSelectedTime(null); // Reset time when date changes
                        }}
                        className={`flex-1 p-4 rounded-xl flex flex-col items-center justify-center transition-all border-2
                          ${isSelected 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' 
                            : 'bg-white border-gray-100 text-gray-600 hover:border-indigo-200'
                          }`}
                      >
                        <span className="text-[10px] font-bold uppercase opacity-80">
                          {format(day, 'EEE')}
                        </span>
                        <span className="text-xl font-black">
                          {format(day, 'd')}
                        </span>
                        <span className="text-[10px] font-medium uppercase">
                          {format(day, 'MMM')}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center italic">
                  Showing availability for the next 72 hours
                </p>
              </div>

              {/* Time Slot Selector */}
              <div>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Available Slots
                </h3>
                {filteredTimeSlots.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredTimeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-xl text-xs font-black transition-all border-2
                          ${selectedTime === time 
                            ? 'border-indigo-600 bg-indigo-600 text-white shadow-md' 
                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-indigo-200'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <p className="text-sm text-gray-500 font-medium">No slots left for today.</p>
                    <p className="text-xs text-gray-400">Please try tomorrow!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-6 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Back
              </button>
              <button
                onClick={() => selectedTime && setStep(3)}
                disabled={!selectedTime}
                className="flex-[2] px-6 py-4 bg-indigo-600 text-white rounded-xl font-bold disabled:opacity-50 transition shadow-lg shadow-indigo-100"
              >
                Next: Review & Confirm
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 3: Review and Confirm --- */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-black text-gray-800 mb-6">3. Review & Confirm</h2>
            
            {/* Receipt Card */}
            <div className="border-2 border-indigo-100 bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-indigo-600 p-4 text-white">
                <p className="text-xs uppercase font-bold opacity-80 tracking-widest">Appointment Summary</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Service</p>
                    <p className="text-lg font-black text-gray-900">{selectedService.name}</p>
                  </div>
                  <Scissors className="h-5 w-5 text-indigo-500" />
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-dashed border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Date</p>
                    <p className="text-sm font-bold text-gray-700">{format(selectedDate, 'MMM dd, yyyy')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Time</p>
                    <p className="text-sm font-bold text-gray-700">{selectedTime}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-gray-900 font-black text-xl">Total Price</p>
                  <p className="text-2xl font-black text-indigo-600">${selectedService.price.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* RESPONSIVE BUTTONS */}
            <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 px-6 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all text-sm sm:text-base"
              >
                Back to Selection
              </button>
              <button
                onClick={handleBookingSubmit}
                disabled={isSubmitting}
                className="flex-[2] px-6 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Check className="h-5 w-5" />
                    Confirm Booking
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
