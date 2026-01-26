import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Week 1", filled: 12, empty: 4 },
  { name: "Week 2", filled: 14, empty: 2 },
  { name: "Week 3", filled: 15, empty: 1 },
  { name: "Week 4", filled: 13, empty: 3 },
];

export function OccupancyChart() {
  return (
    <Card className="hover-elevate">
      <CardHeader>
        <CardTitle>Occupancy Trends</CardTitle>
        <CardDescription>
          Weekly occupancy rates for the current month
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar 
                dataKey="filled" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]} 
                name="Filled Beds"
              />
              <Bar 
                dataKey="empty" 
                fill="hsl(var(--muted))" 
                radius={[4, 4, 0, 0]} 
                name="Empty Beds"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
