import { CustomerTable } from '@/components/Dashboard/dataTables/CustomerTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowDown,
  ArrowUp,
  CirclePlus,
  Download,
  Eye,
  Lightbulb,
  Search,
  Settings2,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: ReactNode;
}

const StatsCard = ({ change, icon, title, trend, value }: StatsCardProps) => {
  return (
    <Card className="border-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
          <div className="rounded-full bg-muted p-2">{icon}</div>
        </div>
        <div className="mt-2 flex items-baseline space-x-3">
          <p className="text-3xl font-bold">{value}</p>
          <div
            className={`flex items-center text-sm ${
              trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend === 'up' ? (
              <ArrowUp className="mr-1 h-3 w-3" />
            ) : (
              <ArrowDown className="mr-1 h-3 w-3" />
            )}
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const page = () => {
  return (
    <div>
      <Card className="p-4 ">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl font-semibold leading-none tracking-tight">
            Sales Overview
          </h1>

          <div className="flex items-center gap-4">
            <Search className="h-6 w-6 text-muted-foreground" />

            <Button variant={'outline'}>
              <Settings2 className="h-6 w-6 text-muted-foreground" />
              Customize
            </Button>
            <Button variant={'outline'}>
              <CirclePlus className="h-6 w-6 text-muted-foreground" />
              Add New
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5">
          <Card className="col-span-4 ">
            <CardContent className="pt-6">
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download Report
                  </Button>
                  <span className="text-sm font-medium text-green-500">
                    +8.8%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    All Time High
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">98.78%</span>
                  <span className="text-sm text-muted-foreground">
                    Total Sales
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 lg:col-span-1 p-0">
            <StatsCard
              title="Total Visitors"
              value="4,818"
              change="+44.2%"
              trend="up"
              icon={<Eye className="h-6 w-6 bg-purple-100 text-purple-800" />}
            />
            <StatsCard
              title="Engagement Rate"
              value="118,818"
              change="-2.8%"
              trend="down"
              icon={
                <Lightbulb className="h-6 w-6 bg-purple-100 text-purple-800" />
              }
            />
            <StatsCard
              title="Conversion Rate"
              value="12,158,187"
              change="+8%"
              trend="up"
              icon={<Zap className="h-6 w-6 bg-purple-100 text-purple-800" />}
            />
          </Card>
        </div>
      </Card>

      <CustomerTable />
    </div>
  );
};

export default page;
