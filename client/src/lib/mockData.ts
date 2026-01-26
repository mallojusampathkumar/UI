import { Home, BedDouble, Users, CreditCard, Receipt, BarChart3, Settings, LogOut, Bell, Search, User } from "lucide-react";

export interface Tenant {
  id: string;
  name: string;
  phone: string;
  roomNo: string;
  rentDueDate: string;
  status: "paid" | "unpaid";
  joiningDate: string;
  securityDeposit: number;
  avatar?: string;
}

export interface Room {
  id: string;
  number: string;
  type: "AC" | "Non-AC";
  totalBeds: number;
  availableBeds: number;
  price: number;
}

export interface Expense {
  id: string;
  category: "Electricity" | "Water" | "Cleaning" | "Maintenance" | "Staff Salary" | "Groceries" | "Other";
  amount: number;
  date: string;
  description: string;
}

export const mockTenants: Tenant[] = [
  { id: "1", name: "Rahul Sharma", phone: "+91 98765 43210", roomNo: "101", rentDueDate: "2024-02-01", status: "paid", joiningDate: "2023-12-01", securityDeposit: 5000 },
  { id: "2", name: "Amit Patel", phone: "+91 98765 12345", roomNo: "102", rentDueDate: "2024-02-01", status: "unpaid", joiningDate: "2024-01-15", securityDeposit: 5000 },
  { id: "3", name: "Priya Singh", phone: "+91 99887 76655", roomNo: "201", rentDueDate: "2024-02-01", status: "paid", joiningDate: "2023-11-20", securityDeposit: 6000 },
  { id: "4", name: "Vikram Malhotra", phone: "+91 88776 65544", roomNo: "101", rentDueDate: "2024-02-01", status: "unpaid", joiningDate: "2024-01-05", securityDeposit: 5000 },
  { id: "5", name: "Sneha Gupta", phone: "+91 77665 54433", roomNo: "202", rentDueDate: "2024-02-01", status: "paid", joiningDate: "2023-10-10", securityDeposit: 6000 },
];

export const mockRooms: Room[] = [
  { id: "1", number: "101", type: "Non-AC", totalBeds: 3, availableBeds: 1, price: 4000 },
  { id: "2", number: "102", type: "Non-AC", totalBeds: 3, availableBeds: 3, price: 4000 },
  { id: "3", number: "201", type: "AC", totalBeds: 2, availableBeds: 0, price: 6000 },
  { id: "4", number: "202", type: "AC", totalBeds: 2, availableBeds: 1, price: 6000 },
  { id: "5", number: "301", type: "Non-AC", totalBeds: 4, availableBeds: 2, price: 3500 },
  { id: "6", number: "302", type: "Non-AC", totalBeds: 4, availableBeds: 4, price: 3500 },
];

export const mockExpenses: Expense[] = [
  { id: "1", category: "Electricity", amount: 12500, date: "2024-01-28", description: "January Bill" },
  { id: "2", category: "Groceries", amount: 8400, date: "2024-01-25", description: "Weekly ration" },
  { id: "3", category: "Maintenance", amount: 1500, date: "2024-01-22", description: "Plumber charges" },
  { id: "4", category: "Staff Salary", amount: 15000, date: "2024-01-01", description: "Cleaner & Cook" },
];

export const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Room Management", icon: BedDouble, href: "/rooms" },
  { label: "Tenants", icon: Users, href: "/tenants" },
  { label: "Payments & Rent", icon: CreditCard, href: "/payments" },
  { label: "Expenses", icon: Receipt, href: "/expenses" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
];
