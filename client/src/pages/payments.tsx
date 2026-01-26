import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MessageCircle, BellRing } from "lucide-react";
import { mockTenants } from "@/lib/mockData";
import { toast } from "@/hooks/use-toast";

export default function Payments() {
  
  const handleReminder = (phone: string, name: string, amount: number) => {
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    const message = `Hello ${name}, this is a gentle reminder that your rent of ₹${amount} is due. Please pay at your earliest convenience.`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Reminder Sent",
      description: `WhatsApp template opened for ${name}`,
    });
  };

  const toggleStatus = (id: string, currentStatus: string) => {
     // In a real app, this would make an API call
     toast({
       title: "Status Updated",
       description: `Payment marked as ${currentStatus === 'paid' ? 'Unpaid' : 'Paid'}`,
     });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Payments & Rent</h1>
        <p className="text-muted-foreground">
          Track monthly rent collections and send reminders.
        </p>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Rent Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Mark Paid</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell className="font-medium">
                  <div>{tenant.name}</div>
                  <div className="text-xs text-muted-foreground">{tenant.phone}</div>
                </TableCell>
                <TableCell>Room {tenant.roomNo}</TableCell>
                <TableCell>₹5,000</TableCell>
                <TableCell>{tenant.rentDueDate}</TableCell>
                <TableCell>
                  <Badge variant={tenant.status === "paid" ? "default" : "destructive"}>
                    {tenant.status === "paid" ? "Paid" : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                   <Switch 
                     checked={tenant.status === "paid"} 
                     onCheckedChange={() => toggleStatus(tenant.id, tenant.status)}
                   />
                </TableCell>
                <TableCell className="text-right">
                  {tenant.status === "unpaid" && (
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => handleReminder(tenant.phone, tenant.name, 5000)}
                    >
                      <BellRing className="h-4 w-4" />
                      Remind
                    </Button>
                  )}
                  {tenant.status === "paid" && (
                     <Button variant="ghost" size="sm" disabled className="text-muted-foreground">
                       Settled
                     </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
