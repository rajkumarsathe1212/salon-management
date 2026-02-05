"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Camera,
  User,
  Phone,
  Mail,
  Briefcase,
  Percent,
  Save,
  Trash2,
  Check,
  ChevronsUpDown,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function StaffFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const staffId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Stylist",
    commission: "",
    bio: "",
  });

  useEffect(() => {
    if (staffId) {
      const fetchStaffDetails = async () => {
        console.log("Fetching details for Staff ID:", staffId);
        const mockData = {
          name: "Rahul Verma",
          email: "rahul@salon.com",
          phone: "98765 43210",
          role: "Barber",
          commission: "15",
          bio: "Senior barber with 5 years experience.",
        };
        setFormData(mockData);
      };

      fetchStaffDetails();
    }
  }, [staffId]);

  const roles = [
    "Senior Stylist",
    "Stylist",
    "Junior Stylist",
    "Barber",
    "Beautician",
    "Receptionist",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStaffSubmit = (e) => {
    e.preventDefault();
    console.log(staffId ? "UPDATING:" : "CREATING:", formData);
    router.push("/owner/staff");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to remove this staff member?")) {
      console.log("DELETING Staff ID:", staffId);
      router.push("/owner/staff");
    }
  };

  return (
    <form onSubmit={handleStaffSubmit} className="max-w-4xl mx-auto pb-20 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.push("/owner/staff")}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {staffId ? "Edit Staff Member" : "Add New Staff"}
            </h1>
            <p className="text-sm text-gray-500">
              {staffId
                ? `Updating profile for ${formData.name}`
                : "Create a new profile for your team member"}
            </p>
          </div>
        </div>

        {/* Delete Button - Only visible in Edit Mode */}
        {staffId && (
          <button
            type="button"
            onClick={handleDelete}
            className="flex items-center gap-2 text-red-600 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl text-sm font-bold transition"
          >
            <Trash2 className="h-4 w-4" /> Delete Staff
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Photo Upload */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-full h-full bg-indigo-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-indigo-200">
                <User className="h-12 w-12 text-indigo-300" />
              </div>
              <button
                type="button"
                className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h3 className="font-bold text-gray-900 text-sm">Staff Photo</h3>
            <p className="text-[11px] text-gray-400 mt-1">
              JPG, PNG or GIF. Max size 2MB
            </p>
          </div>
        </div>

        {/* Right Column: Form Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-indigo-600" />
              Professional Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 ml-1">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" /> Primary
                  Role
                </label>

                <Listbox
                  value={formData.role || roles[0]}
                  onChange={(val) => setFormData({ ...formData, role: val })}
                >
                  <div className="relative">
                    {/* Main Button */}
                    <ListboxButton className="relative w-full cursor-pointer rounded-2xl bg-gray-50 py-4 pl-4 pr-10 text-left border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm">
                      <span className="block truncate text-gray-700 font-medium text-sm">
                        {formData.role || "Select Role"}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronsUpDown
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    {/* Dropdown Menu */}
                    <Transition
                      as={React.Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <ListboxOptions className="absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5 z-50 focus:outline-none border border-gray-100">
                        {roles.map((role) => (
                          <ListboxOption
                            key={role}
                            value={role}
                            className={({ focus }) =>
                              `relative cursor-default select-none py-4 pl-10 pr-4 transition-colors ${
                                focus
                                  ? "bg-indigo-50 text-indigo-900"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate text-sm ${selected ? "font-bold text-indigo-600" : "font-medium"}`}
                                >
                                  {role}
                                </span>
                                {selected && (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                    <Check
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
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

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Commission (%)
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    name="commission"
                    value={formData.commission}
                    onChange={handleChange}
                    type="number"
                    placeholder="e.g. 15"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@salon.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700"
              type="button"
              onClick={() => router.push("/owner/staff")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 font-bold"
            >
              <Save className="h-4 w-4" />{" "}
              {staffId ? "Update Profile" : "Save Profile"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
