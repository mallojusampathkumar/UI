import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Rooms from "@/pages/rooms";
import Tenants from "@/pages/tenants";
import Payments from "@/pages/payments";
import Expenses from "@/pages/expenses";
import Staff from "@/pages/staff";
import TenantView from "@/pages/tenant-view";
import KYCVault from "@/pages/kyc-vault";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/tenants" component={Tenants} />
      <Route path="/payments" component={Payments} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/staff" component={Staff} />
      <Route path="/kyc-vault" component={KYCVault} />
      <Route path="/tenant-view/:id" component={TenantView} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
