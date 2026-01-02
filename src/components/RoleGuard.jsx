
// src/components/RoleGuard.jsx
'use client';
import { useUser } from '@/context/UserContext';

export default function RoleGuard({ allowedRoles, children }) {
  const { role } = useUser();

  if (!allowedRoles.includes(role)) {
    return (
      <div className="p-10 text-center bg-red-50 border border-red-200 rounded-xl">
        <h2 className="text-red-600 font-bold text-xl">Access Denied</h2>
        <p className="text-red-500">You do not have permission to view this content.</p>
      </div>
    );
  }

  return <>{children}</>;
}
