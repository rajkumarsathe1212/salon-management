
// src/app/(owner)/layout.js

"use client";

import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OwnerGroupRoot({ children }) {
  const { user, role } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted && (!user || role !== 'OWNER')) {
      router.replace('/login');
    }
  }, [user, role, router, mounted]);

  if (!mounted || !user || role !== 'OWNER') {
    return null;
  }

  return (
    <section className="owner-root-logic">
      {children}
    </section>
  );
}
