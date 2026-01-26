import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { OccupancyChart } from "@/components/dashboard/OccupancyChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Users, BedDouble, AlertCircle, IndianRupee } from "lucide-react";
import { mockTenants, mockRooms } from "@/lib/mockData";

export default function Dashboard() {
  // Simple calculations from mock data
  const totalTenants = mockTenants.length;
  const totalBeds = mockRooms.reduce((acc, room) => acc + room.totalBeds, 0);
  const occupiedBeds = totalBeds - mockRooms.reduce((acc, room) => acc + room.availableBeds, 0);
  const occupancyRate = Math.round((occupiedBeds / totalBeds) * 100);
  
  const pendingRent = mockTenants
    .filter(t => t.status === 'unpaid')
    .reduce((acc) => acc + 5000, 0); // Assuming 5000 avg rent

  const collectedRevenue = mockTenants
    .filter(t => t.status === 'paid')
    .reduce((acc) => acc + 5000, 0);

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening at your hostel today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Tenants"
          value={totalTenants}
          icon={Users}
          description="Active tenants"
          trend="up"
          trendValue="+2 this month"
        />
        <StatCard
          title="Occupancy Rate"
          value={`${occupancyRate}%`}
          icon={BedDouble}
          description={`${occupiedBeds}/${totalBeds} beds filled`}
          trend={occupancyRate > 80 ? "up" : "neutral"}
        />
        <StatCard
          title="Pending Rent"
          value={`₹${pendingRent.toLocaleString()}`}
          icon={AlertCircle}
          description="Due payments"
          className="border-l-4 border-l-rose-500" // Highlighted as requested
        />
        <StatCard
          title="Total Revenue"
          value={`₹${collectedRevenue.toLocaleString()}`}
          icon={IndianRupee}
          description="Collected this month"
          className="border-l-4 border-l-emerald-500" // Highlighted as requested
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
           <OccupancyChart />
        </div>
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}
