import { Home, BedDouble, Users, CreditCard, Receipt, BarChart3, Settings, LogOut, Bell, Search, User, UserCircle, Briefcase } from "lucide-react";

export interface RentPayment {
  id: string;
  date: string;
  amountPaid: number;
  totalDue: number;
  remainingBalance: number;
  method: string;
}

export interface Tenant {
  id: string;
  name: string;
  phone: string;
  roomNo: string;
  rentDueDate: string;
  status: "paid" | "unpaid" | "partial";
  joiningDate: string;
  securityDeposit: number;
  avatar?: string;
  totalRent: number;
  amountPaid: number;
  paymentHistory: RentPayment[];
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  phone: string;
  salary: number;
  advanceTaken: number;
  remainingDues: number;
  paymentHistory: RentPayment[];
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
  { 
    id: "1", 
    name: "Rahul Sharma", 
    phone: "+91 98765 43210", 
    roomNo: "101", 
    rentDueDate: "2024-02-01", 
    status: "paid", 
    joiningDate: "2023-12-01", 
    securityDeposit: 5000,
    totalRent: 5000,
    amountPaid: 5000,
    paymentHistory: [
      { id: "p1", date: "2024-01-01", amountPaid: 5000, totalDue: 5000, remainingBalance: 0, method: "UPI" }
    ]
  },
  { 
    id: "2", 
    name: "Amit Patel", 
    phone: "+91 98765 12345", 
    roomNo: "102", 
    rentDueDate: "2024-02-01", 
    status: "partial", 
    joiningDate: "2024-01-15", 
    securityDeposit: 5000,
    totalRent: 5000,
    amountPaid: 2000,
    paymentHistory: [
      { id: "p2", date: "2024-01-15", amountPaid: 2000, totalDue: 5000, remainingBalance: 3000, method: "Cash" }
    ]
  },
  { 
    id: "3", 
    name: "Priya Singh", 
    phone: "+91 99887 76655", 
    roomNo: "201", 
    rentDueDate: "2024-02-01", 
    status: "paid", 
    joiningDate: "2023-11-20", 
    securityDeposit: 6000,
    totalRent: 6000,
    amountPaid: 6000,
    paymentHistory: [
      { id: "p3", date: "2024-01-01", amountPaid: 6000, totalDue: 6000, remainingBalance: 0, method: "UPI" }
    ]
  },
];

export const mockStaff: Staff[] = [
  {
    id: "s1",
    name: "Suresh Kumar",
    role: "Warden",
    phone: "+91 91234 56789",
    salary: 15000,
    advanceTaken: 2000,
    remainingDues: 13000,
    paymentHistory: [
      { id: "sp1", date: "2024-01-20", amountPaid: 2000, totalDue: 15000, remainingBalance: 13000, method: "Advance" }
    ]
  }
];

export const mockRooms: Room[] = [
  { id: "1", number: "101", type: "Non-AC", totalBeds: 3, availableBeds: 1, price: 5000 },
  { id: "2", number: "102", type: "Non-AC", totalBeds: 3, availableBeds: 3, price: 5000 },
  { id: "3", number: "201", type: "AC", totalBeds: 2, availableBeds: 0, price: 6000 },
];

export const mockExpenses: Expense[] = [
  { id: "1", category: "Electricity", amount: 12500, date: "2024-01-28", description: "January Bill" },
  { id: "2", category: "Groceries", amount: 8400, date: "2024-01-25", description: "Weekly ration" },
];

export const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Room Management", icon: BedDouble, href: "/rooms" },
  { label: "Tenants", icon: Users, href: "/tenants" },
  { label: "Staff Management", icon: Briefcase, href: "/staff" },
  { label: "Payments & Rent", icon: CreditCard, href: "/payments" },
  { label: "Expenses", icon: Receipt, href: "/expenses" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
];
