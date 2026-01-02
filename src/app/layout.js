
// src/app/layout.js
import { UserProvider } from "@/context/UserContext";
import "./globals.css";
import RouteGuard from "@/components/RouteGuard";

export const metadata = {
  title: "Saloon Management System",
  description: "Created with care and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <UserProvider>

          {/* Route guard */}
          <RouteGuard>
            {children}
          </RouteGuard>

        </UserProvider>
      </body>
    </html>
  );
}
