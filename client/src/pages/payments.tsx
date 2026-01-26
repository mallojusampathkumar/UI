import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { mockTenants } from "@/lib/mockData";
import { FileText, Download, Receipt as ReceiptIcon, UserCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Payments() {
  const handleDownloadPDF = (type: string, name: string) => {
    toast({
      title: "Generating PDF",
      description: `Downloading ${type} for ${name}...`,
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Payments & Audit</h1>
        <p className="text-muted-foreground">
          Manage rent, partial payments, and download receipts.
        </p>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Due</TableHead>
              <TableHead>Paid</TableHead>
              <TableHead>Remaining</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead className="text-right">Receipts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{tenant.name}</span>
                    <span className="text-xs text-muted-foreground">Room {tenant.roomNo}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={tenant.status === "paid" ? "default" : tenant.status === "partial" ? "secondary" : "destructive"}>
                    {tenant.status.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>₹{tenant.totalRent}</TableCell>
                <TableCell className="text-emerald-600 font-medium">₹{tenant.amountPaid}</TableCell>
                <TableCell className="text-rose-600 font-medium">₹{tenant.totalRent - tenant.amountPaid}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Partial Pay</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Partial Payment - {tenant.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Amount</Label>
                          <Input type="number" placeholder="Enter amount" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right">Note</Label>
                          <Input placeholder="Payment note" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => toast({ title: "Success", description: "Payment recorded" })}>
                          Record Payment
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleDownloadPDF("Rent Receipt", tenant.name)}>
                      <ReceiptIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDownloadPDF("KYC Doc", tenant.name)}>
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Link href={`/tenant-view/${tenant.id}`}>
                      <Button variant="ghost" size="icon">
                        <UserCircle className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
