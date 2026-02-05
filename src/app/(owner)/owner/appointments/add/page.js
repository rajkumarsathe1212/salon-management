
"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import {
  Check,
  ChevronsUpDown,
  User,
  Scissors,
  Clock,
  Calendar as CalendarIcon,
  Loader2,
  ArrowLeft, // Added for Back button
  X // Added for Cancel button
} from "lucide-react";
import { format, addDays, startOfDay, addMinutes, isBefore, parse } from "date-fns";
import { CLIENTS, STAFF, SERVICES } from "@/lib/mock-data";

export default function AddAppointment() {
  const router = useRouter();

  const today = new Date();
  const minDateStr = format(today, "yyyy-MM-dd");
  const maxDateStr = format(addDays(today, 2), "yyyy-MM-dd");

  const timeSlots = useMemo(() => {
    const slots = [];
    let current = parse("08:00", "HH:mm", new Date());
    const end = parse("11:30", "HH:mm", new Date());

    while (current <= end) {
      slots.push(format(current, "hh:mm aa")); // Format: 08:00 AM
      current = addMinutes(current, 30);
    }
    return slots;
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(STAFF[0]);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  const [bookingDate, setBookingDate] = useState(minDateStr);
  const [bookingTime, setBookingTime] = useState(timeSlots[4]); // Default to 10:00 AM

  const filteredClients =
    query === ""
      ? CLIENTS
      : CLIENTS.filter(
          (client) =>
            client.name.toLowerCase().includes(query.toLowerCase()) ||
            client.phone.includes(query),
        );

  const handleConfirmBooking = async () => {
    if (!selectedClient || !selectedService) {
      alert("Please select a client and service");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted Booking:", {
        client: selectedClient,
        staff: selectedStaff,
        service: selectedService,
        date: bookingDate,
        time: bookingTime
      });

      setIsSubmitting(false);
      router.push("/owner/appointments/list");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto pb-32 px-4 md:px-0">
      {/* --- HEADER WITH BACK BUTTON --- */}
      <div className="flex items-center gap-4 mb-8 mt-4">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-xl text-gray-500 transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">New Appointment</h1>
      </div>

      <div className="space-y-6">
        {/* --- CLIENT SEARCH --- */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <User className="h-4 w-4 text-indigo-600" /> Select Client
          </label>
          <Combobox
            value={selectedClient}
            onChange={setSelectedClient}
            onClose={() => setQuery("")}
          >
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white border border-gray-200 text-left focus-within:ring-2 focus-within:ring-indigo-500 transition shadow-sm">
                <ComboboxInput
                  className="w-full border-none py-4 pl-4 pr-10 text-sm leading-5 text-gray-900 outline-none"
                  displayValue={(client) => client?.name || ""}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search name or phone..."
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                </ComboboxButton>
              </div>
              <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  {filteredClients.map((client) => (
                    <ComboboxOption
                      key={client.id}
                      value={client}
                      className={({ focus }) =>
                        `relative cursor-default select-none py-3 pl-10 pr-4 ${focus ? "bg-indigo-600 text-white" : "text-gray-900"}`
                      }
                    >
                      {({ selected, focus }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {client.name} <span className={`text-xs ml-2 ${focus ? "text-indigo-200" : "text-gray-400"}`}>({client.phone})</span>
                          </span>
                          {selected && (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? "text-white" : "text-indigo-600"}`}>
                              <Check className="h-5 w-5" />
                            </span>
                          )}
                        </>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Transition>
            </div>
          </Combobox>
        </div>

        {/* --- NEW: DATE & TIME SELECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-indigo-600" /> Date
            </label>
            <input
              type="date"
              min={minDateStr}
              max={maxDateStr}
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 py-4 px-4 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-sm bg-white block"
              style={{ colorScheme: "light" }} 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Clock className="h-4 w-4 text-indigo-600" /> Start Time
            </label>
            <Listbox value={bookingTime} onChange={setBookingTime}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-2xl bg-white py-4 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm shadow-sm font-medium">
                  <span className="block truncate">{bookingTime}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                  </span>
                </ListboxButton>
                <Transition as="div" leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                    {timeSlots.map((time) => (
                      <ListboxOption
                        key={time}
                        value={time}
                        className={({ focus }) => `relative cursor-default select-none py-3 pl-10 pr-4 ${focus ? "bg-indigo-600 text-white" : "text-gray-900"}`}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? "font-bold" : "font-normal"}`}>{time}</span>
                            {selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"><Check className="h-5 w-5" /></span>}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        {/* --- STAFF & SERVICE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Scissors className="h-4 w-4 text-indigo-600" /> Staff
            </label>
            <Listbox value={selectedStaff} onChange={setSelectedStaff}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-xl bg-white py-4 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm shadow-sm">
                  <span className="block truncate">{selectedStaff.name} {selectedStaff.isOwner ? "(You)" : ""}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                  {STAFF.map((person) => (
                    <ListboxOption
                      key={person.id}
                      value={person}
                      className={({ focus }) => `relative cursor-default select-none py-3 pl-10 pr-4 ${focus ? "bg-indigo-600 text-white" : "text-gray-900"}`}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{person.name}</span>
                          {selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"><Check className="h-5 w-5" /></span>}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Clock className="h-4 w-4 text-indigo-600" /> Service
            </label>
            <Listbox value={selectedService} onChange={setSelectedService}>
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-xl bg-white py-4 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm shadow-sm">
                  <span className="block truncate">{selectedService?.name || "Choose Service"}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                  {SERVICES.map((service) => (
                    <ListboxOption
                      key={service.id}
                      value={service}
                      className={({ focus }) => `relative cursor-default select-none py-3 pl-10 pr-4 ${focus ? "bg-indigo-600 text-white" : "text-gray-900"}`}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {service.name} <span className="text-xs opacity-70 ml-2">₹{service.price}</span>
                          </span>
                          {selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"><Check className="h-5 w-5" /></span>}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>

        {/* --- SUMMARY --- */}
        {selectedClient && selectedService && (
          <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-100 animate-in fade-in slide-in-from-top-2">
            <h3 className="font-black text-indigo-900 mb-2 uppercase text-xs tracking-widest">Booking Summary</h3>
            <div className="flex justify-between text-sm text-indigo-700">
              <span className="font-bold">{selectedClient.name} — {selectedService.name}</span>
              <span className="font-black">₹{selectedService.price}</span>
            </div>
            <div className="flex flex-col gap-1 mt-3 pt-3 border-t border-indigo-100">
                <p className="text-xs text-indigo-600 font-medium">
                    📅 {format(new Date(bookingDate), "PPP")} at {bookingTime}
                </p>
                <p className="text-xs text-indigo-500 italic">Provider: {selectedStaff.name}</p>
            </div>
          </div>
        )}

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.push("/owner/appointments/list")}
            className="flex-1 py-4 px-6 border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <X className="h-5 w-5" />
            Cancel
          </button>
          
          <button
            onClick={handleConfirmBooking}
            disabled={isSubmitting}
            className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 disabled:bg-indigo-300 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Booking...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
