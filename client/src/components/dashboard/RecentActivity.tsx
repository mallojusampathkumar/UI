import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    user: "Rahul Sharma",
    action: "paid rent",
    amount: "₹5,000",
    time: "2 hours ago",
    avatar: "RS",
    initials: "RS",
  },
  {
    user: "Amit Patel",
    action: "joined Room 102",
    time: "5 hours ago",
    avatar: "AP",
    initials: "AP",
  },
  {
    user: "Sneha Gupta",
    action: "reported maintenance issue",
    time: "Yesterday",
    avatar: "SG",
    initials: "SG",
  },
  {
    user: "Priya Singh",
    action: "paid security deposit",
    amount: "₹6,000",
    time: "Yesterday",
    avatar: "PS",
    initials: "PS",
  },
];

export function RecentActivity() {
  return (
    <Card className="hover-elevate col-span-1 lg:col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest payments and tenant updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
              {activity.amount && (
                <div className="ml-auto font-medium text-emerald-600">
                  +{activity.amount}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
