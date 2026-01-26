import { useParams } from "wouter";
import { mockTenants } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Home, User as UserIcon, Phone, Calendar, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function TenantView() {
  const { id } = useParams();
  const tenant = mockTenants.find(t => t.id === id);

  if (!tenant) return <div>Tenant not found</div>;

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/payments">
              <Button variant="ghost" size="icon"><Home className="h-5 w-5" /></Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Tenant Portal</h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Download All Documents
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold mb-4">
                {tenant.name.charAt(0)}
              </div>
              <CardTitle>{tenant.name}</CardTitle>
              <CardDescription>Room {tenant.roomNo}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{tenant.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined: {tenant.joiningDate}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                <span>Security: ₹{tenant.securityDeposit}</span>
              </div>
              <div className="pt-4">
                <Badge className="w-full justify-center py-1" variant={tenant.status === 'paid' ? 'default' : 'destructive'}>
                  {tenant.status.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your past rent payments and balances.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Paid</TableHead>
                    <TableHead>Due</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tenant.paymentHistory.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>{p.date}</TableCell>
                      <TableCell className="text-emerald-600 font-medium">₹{p.amountPaid}</TableCell>
                      <TableCell className="text-rose-600">₹{p.remainingBalance}</TableCell>
                      <TableCell>{p.method}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
