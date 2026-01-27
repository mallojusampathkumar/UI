import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockTenants, mockStaff } from "@/lib/mockData";
import { ShieldCheck, Search, Download, Eye, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function KYCVault() {
  const allKyc = [
    ...mockTenants.map(t => ({ ...t, userType: 'Tenant' })),
    ...mockStaff.map(s => ({ ...s, userType: 'Staff' }))
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">KYC Vault</h1>
        <p className="text-muted-foreground">
          Centralized storage for all tenant and staff identity documents.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {allKyc.reduce((acc, curr) => acc + curr.kyc.length, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verification</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {allKyc.reduce((acc, curr) => acc + curr.kyc.filter(k => k.status === 'Pending').length, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((allKyc.reduce((acc, curr) => acc + curr.kyc.filter(k => k.status === 'Verified').length, 0) / 
               allKyc.reduce((acc, curr) => acc + curr.kyc.length, 0)) * 100)}%
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center py-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name or doc type..." className="pl-8" />
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Document</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allKyc.map((user) => (
              user.kyc.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{user.name}</span>
                      <span className="text-xs text-muted-foreground">{user.userType}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.userType}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>
                    <Badge variant={doc.status === 'Verified' ? 'default' : doc.status === 'Pending' ? 'secondary' : 'destructive'} className="gap-1">
                      {doc.status === 'Verified' && <CheckCircle2 className="h-3 w-3" />}
                      {doc.status === 'Pending' && <Clock className="h-3 w-3" />}
                      {doc.status === 'Rejected' && <AlertCircle className="h-3 w-3" />}
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => toast({ title: "Previewing", description: `Viewing ${doc.type}` })}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => toast({ title: "Downloading", description: `Downloading ${doc.type}` })}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
