
import { addDays } from "date-fns";

export const SALON_CONFIG = {
  openingTime: "10:00",
  closingTime: "20:00",
  slotGap: 30,
};

export const STAFF = [
  { id: "s1", name: "Ravi (Owner)", role: "Master Barber", isOwner: true },
  { id: "s2", name: "Priya Mehta", role: "Stylist", isOwner: false },
];

export const CLIENTS = [
  { id: "c1", name: "Aisha Sharma", phone: "9876543210", email: "aisha@example.com", lastVisit: "2024-01-10" },
  { id: "c2", name: "Rajesh Kumar", phone: "9123456789", email: "rajesh@example.com", lastVisit: "2024-01-15" },
  { id: "c3", name: "Vikram Singh", phone: "9988776655", email: "vikram@example.com", lastVisit: "2024-01-18" },
];

export const SERVICES = [
  { id: 1, name: "Premium Haircut", price: 800, duration: 45 },
  { id: 2, name: "Beard Sculpture", price: 400, duration: 30 },
  { id: 3, name: "Hair Coloring", price: 2500, duration: 120 },
];

export const APPOINTMENTS = [
  { id: 1, time: "10:00", period: "AM", client: "Aisha Sharma", service: "Classic Fade", staff: "Ravi (Owner)", status: "confirmed", date: new Date() },
  { id: 2, time: "11:30", period: "AM", client: "Rajesh Kumar", service: "Beard Sculpture", staff: "Priya", status: "confirmed", date: new Date() },
  { id: 3, time: "02:00", period: "PM", client: "Neha Gupta", service: "Hair Spa", staff: "Priya", status: "pending", date: addDays(new Date(), 1) },
];
