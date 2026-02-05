// src/app/(owner)/services/page.js

"use client";
import { useState } from 'react';
import { Scissors, Clock, IndianRupee, Plus, Edit2, Trash2, X } from 'lucide-react';

const mockServices = [
  { id: 1, name: "Haircut & Styling", price: 800, duration: 45 },
  { id: 2, name: "Beard Trim", price: 300, duration: 20 },
  { id: 3, name: "Hair Color", price: 2500, duration: 120 },
  { id: 4, name: "Manicure", price: 600, duration: 40 },
  { id: 5, name: "Facial", price: 1200, duration: 60 },
];

export default function ServicesPage() {
  const [services, setServices] = useState(mockServices);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", duration: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setServices(s => s.map(service => 
        service.id === editing.id ? { ...service, ...form, price: Number(form.price), duration: Number(form.duration) } : service
      ));
    } else {
      setServices(s => [...s, { id: Date.now(), ...form, price: Number(form.price), duration: Number(form.duration) }]);
    }
    setIsOpen(false);
    setEditing(null);
    setForm({ name: "", price: "", duration: "" });
  };

  const handleEdit = (service) => {
    setEditing(service);
    setForm({ name: service.name, price: service.price, duration: service.duration });
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this service?")) {
      setServices(s => s.filter(s => s.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-500 text-sm">Manage your salon menu and pricing</p>
        </div>
        <button
          onClick={() => { setEditing(null); setForm({ name: "", price: "", duration: "" }); setIsOpen(true); }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 font-semibold"
        >
          <Plus className="h-5 w-5" /> Add New Service
        </button>
      </div>

      {/* Services Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Desktop Table View */}
        <table className="hidden md:table w-full text-left border-collapse">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="p-5 font-bold text-gray-400 text-xs uppercase tracking-widest">Service Name</th>
              <th className="p-5 font-bold text-gray-400 text-xs uppercase tracking-widest">Price</th>
              <th className="p-5 font-bold text-gray-400 text-xs uppercase tracking-widest">Duration</th>
              <th className="p-5 font-bold text-gray-400 text-xs uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-indigo-50/30 transition">
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                      <Scissors className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-gray-800">{service.name}</span>
                  </div>
                </td>
                <td className="p-5 font-semibold text-gray-900">
                   <div className="flex items-center"><IndianRupee className="h-4 w-4 mr-0.5" />{service.price}</div>
                </td>
                <td className="p-5 text-gray-500">
                   <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{service.duration} min</div>
                </td>
                <td className="p-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEdit(service)} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"><Edit2 className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(service.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile List View */}
        <div className="md:hidden divide-y divide-gray-100">
          {services.map((service) => (
            <div key={service.id} className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 h-fit">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{service.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm font-black text-indigo-600 flex items-center">
                        <IndianRupee className="h-3 w-3" />{service.price}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />{service.duration} min
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => handleEdit(service)} className="p-2 text-indigo-600 active:bg-indigo-50 rounded-lg"><Edit2 className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(service.id)} className="p-2 text-red-500 active:bg-red-50 rounded-lg"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in slide-in-from-bottom sm:zoom-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">{editing ? "Edit Service" : "Add Service"}</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="h-5 w-5 text-gray-400" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  placeholder="e.g. Hair Hydration Spa"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    placeholder="800"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Duration (min)</label>
                  <input
                    type="number"
                    placeholder="45"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button type="submit" className="w-full sm:order-2 px-5 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-100 transition-all">
                  {editing ? "Save Changes" : "Create Service"}
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="w-full sm:order-1 px-5 py-4 text-gray-500 font-semibold rounded-xl hover:bg-gray-100 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
