// src/app/(owner)/services/page.js

"use client";
import { useState } from 'react';
import { Scissors, Clock, IndianRupee, Plus, Edit2, Trash2 } from 'lucide-react';

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
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <button
          onClick={() => { setEditing(null); setForm({ name: "", price: "", duration: "" }); setIsOpen(true); }}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          <Plus className="h-5 w-5" /> Add Service
        </button>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">Service Name</th>
              <th className="text-left p-4 font-semibold text-gray-700">Price</th>
              <th className="text-left p-4 font-semibold text-gray-700">Duration</th>
              <th className="text-right p-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50 transition">
                <td className="p-4 font-medium flex items-center gap-3">
                  <Scissors className="h-600" /> {service.name}
                </td>
                <td className="p-4"><span className="flex items-center gap-1"><IndianRupee className="h-4 w-4" />{service.price}</span></td>
                <td className="p-4"><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{service.duration} min</span></td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => handleEdit(service)} className="text-indigo-600 hover:bg-indigo-50 p-2 rounded"><Edit2 className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:bg-red-50 p-2 rounded"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">{editing ? "Edit" : "Add"} Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Service Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300"
                required
              />
              <input
                type="number"
                placeholder="Price (₹)"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300"
                required
              />
              <input
                type="number"
                placeholder="Duration (minutes)"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300"
                required
              />
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setIsOpen(false)} className="px-5 py-2 border rounded-lg hover:bg-gray-100">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  {editing ? "Update" : "Add"} Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
