import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockRooms, mockTenants } from "@/lib/mockData";
import { User, Snowflake, Wind } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Rooms() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Room Management</h1>
        <p className="text-muted-foreground">
          Manage beds, room availability, and view tenant details.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockRooms.map((room) => {
          const isFull = room.availableBeds === 0;
          const tenantsInRoom = mockTenants.filter(t => t.roomNo === room.number);

          return (
            <Dialog key={room.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-md hover:border-primary/50 group">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-bold">Room {room.number}</CardTitle>
                    <div className={`h-3 w-3 rounded-full ${isFull ? "bg-rose-500" : "bg-emerald-500 ring-2 ring-emerald-100"}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                      {room.type === "AC" ? <Snowflake className="h-4 w-4 text-sky-500" /> : <Wind className="h-4 w-4 text-orange-500" />}
                      <span>{room.type}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Beds</span>
                        <span className="font-medium">{room.totalBeds}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Available</span>
                        <span className={`font-bold ${room.availableBeds > 0 ? "text-primary" : "text-muted-foreground"}`}>
                          {room.availableBeds}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-3">
                    <p className="text-xs text-center w-full text-muted-foreground group-hover:text-primary transition-colors">
                      Click to view tenants
                    </p>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Room {room.number} Details</DialogTitle>
                  <DialogDescription>
                    {room.type} Room • ₹{room.price}/month per bed
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">Occupants</h4>
                  {tenantsInRoom.length > 0 ? (
                    <div className="space-y-4">
                      {tenantsInRoom.map((tenant) => (
                        <div key={tenant.id} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {tenant.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{tenant.name}</p>
                              <p className="text-xs text-muted-foreground">{tenant.phone}</p>
                            </div>
                          </div>
                          <Badge variant={tenant.status === "paid" ? "default" : "destructive"}>
                            {tenant.status === "paid" ? "Paid" : "Due"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground border-2 border-dashed rounded-lg">
                      No tenants in this room.
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
