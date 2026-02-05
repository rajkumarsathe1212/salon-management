
// src/app/(auth)/layout.js

"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }) {
  const { user, role } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // if (role === 'ADMIN') router.replace('/admin/dashboard');
      if (role === 'OWNER') router.replace('/owner/dashboard');
      else router.replace('/');
    }
  }, [user, role, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}
