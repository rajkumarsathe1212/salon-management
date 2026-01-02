
// src/app/(admin)/layout.js
"use client";

import { useUser } from "@/context/UserContext";

export default function AdminRootGroup({ children }) {
  const { role } = useUser();

  if (role !== 'ADMIN') return null;

  return (
    <div className="admin-group-wrapper">
      {children}
    </div>
  );
}
