
"use client";
import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, Save, ArrowLeft, Tag, MapPin } from 'lucide-react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from "@headlessui/react";
import { Check, ChevronsUpDown, BarChart3 } from "lucide-react";
import Link from 'next/link';

export default function AddClientPage() {
  const [formData, setFormData] = useState({
    name: '', 
    phone: '', 
    email: '', 
    type: 'Walk-in',
    birthday: '', 
    source: '',
    address: ''
  });

  const clientTypes = ["New", "Regular", "VIP"];
  const sources = ["Walk-in", "Instagram", "Google Maps", "Friend Referral"];

  return (
    <div className="max-w-2xl mx-auto pb-10 px-4 md:px-0">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/owner/clients" className="p-2 hover:bg-gray-100 rounded-xl transition text-gray-500">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Client</h1>
          <p className="text-sm text-gray-500">Create a new profile for your salon database</p>
        </div>
      </div>

      <form className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8 space-y-8">
          
          {/* Section: Basic Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">
              <User className="h-4 w-4" /> Personal Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="e.g. Aisha Sharma" 
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="tel" 
                    placeholder="98765 43210" 
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="aisha@example.com" 
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Section: Classification (To match your List UI) */}
          <div className="space-y-4 pt-6 border-t border-gray-50">
            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">
              <Tag className="h-4 w-4" /> Client Categorization
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Client Type</label>
                <div className="flex gap-2">
                  {clientTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, type})}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.type === type 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 ml-1">
                  <BarChart3 className="h-4 w-4 text-indigo-600" /> Lead Source
                </label>
                
                <Listbox 
                  value={formData.source || "Walk-in"} 
                  onChange={(val) => setFormData({...formData, source: val})}
                >
                  <div className="relative">
                    <ListboxButton className="relative w-full cursor-pointer rounded-2xl bg-gray-50 py-4 pl-4 pr-10 text-left border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm">
                      <span className="block truncate text-gray-700 font-medium">
                        {formData.source || "Walk-in"}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronsUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </ListboxButton>

                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <ListboxOptions className="absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 z-50 focus:outline-none border border-gray-100">
                        {sources.map((source) => (
                          <ListboxOption
                            key={source}
                            value={source}
                            className={({ focus }) =>
                              `relative cursor-default select-none py-4 pl-10 pr-4 transition-colors ${
                                focus ? "bg-indigo-50 text-indigo-900" : "text-gray-900"
                              }`
                            }
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? "font-bold text-indigo-600" : "font-medium"}`}>
                                  {source}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                    <Check className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                )}
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
          </div>

          {/* Section: Additional Info */}
          <div className="space-y-4  border-t border-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Birthday</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="date" 
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-600"
                    onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Address (Optional)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Street, City"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 bg-gray-50/50 flex flex-col md:flex-row gap-3">
          <button 
            type="submit" 
            className="flex-[2] bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
          >
            <Save className="h-5 w-5" /> Save Client Profile
          </button>
          <Link 
            href="/owner/clients" 
            className="flex-1 bg-white border border-gray-200 text-gray-500 py-4 rounded-2xl font-bold hover:bg-gray-100 transition text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
