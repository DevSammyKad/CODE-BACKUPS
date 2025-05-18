'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { useIsMobile } from '@/hooks/use-mobile';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
const chartData = [
  { date: '2024-04-01', new: 222, loyal: 150 },
  { date: '2024-04-02', new: 97, loyal: 180 },
  { date: '2024-04-03', new: 167, loyal: 120 },
  { date: '2024-04-04', new: 242, loyal: 260 },
  { date: '2024-04-05', new: 373, loyal: 290 },
  { date: '2024-04-06', new: 301, loyal: 340 },
  { date: '2024-04-07', new: 245, loyal: 180 },
  { date: '2024-04-08', new: 409, loyal: 320 },
  { date: '2024-04-09', new: 59, loyal: 110 },
  { date: '2024-04-10', new: 261, loyal: 190 },
  { date: '2024-04-11', new: 327, loyal: 350 },
  { date: '2024-04-12', new: 292, loyal: 210 },
  { date: '2024-04-13', new: 342, loyal: 380 },
  { date: '2024-04-14', new: 137, loyal: 220 },
  { date: '2024-04-15', new: 120, loyal: 170 },
  { date: '2024-04-16', new: 138, loyal: 190 },
  { date: '2024-04-17', new: 446, loyal: 360 },
  { date: '2024-04-18', new: 364, loyal: 410 },
  { date: '2024-04-19', new: 243, loyal: 180 },
  { date: '2024-04-20', new: 89, loyal: 150 },
  { date: '2024-04-21', new: 137, loyal: 200 },
  { date: '2024-04-22', new: 224, loyal: 170 },
  { date: '2024-04-23', new: 138, loyal: 230 },
  { date: '2024-04-24', new: 387, loyal: 290 },
  { date: '2024-04-25', new: 215, loyal: 250 },
  { date: '2024-04-26', new: 75, loyal: 130 },
  { date: '2024-04-27', new: 383, loyal: 420 },
  { date: '2024-04-28', new: 122, loyal: 180 },
  { date: '2024-04-29', new: 315, loyal: 240 },
  { date: '2024-04-30', new: 454, loyal: 380 },
  { date: '2024-05-01', new: 165, loyal: 220 },
  { date: '2024-05-02', new: 293, loyal: 310 },
  { date: '2024-05-03', new: 247, loyal: 190 },
  { date: '2024-05-04', new: 385, loyal: 420 },
  { date: '2024-05-05', new: 481, loyal: 390 },
  { date: '2024-05-06', new: 498, loyal: 520 },
  { date: '2024-05-07', new: 388, loyal: 300 },
  { date: '2024-05-08', new: 149, loyal: 210 },
  { date: '2024-05-09', new: 227, loyal: 180 },
  { date: '2024-05-10', new: 293, loyal: 330 },
  { date: '2024-05-11', new: 335, loyal: 270 },
  { date: '2024-05-12', new: 197, loyal: 240 },
  { date: '2024-05-13', new: 197, loyal: 160 },
  { date: '2024-05-14', new: 448, loyal: 490 },
  { date: '2024-05-15', new: 473, loyal: 380 },
  { date: '2024-05-16', new: 338, loyal: 400 },
  { date: '2024-05-17', new: 499, loyal: 420 },
  { date: '2024-05-18', new: 315, loyal: 350 },
  { date: '2024-05-19', new: 235, loyal: 180 },
  { date: '2024-05-20', new: 177, loyal: 230 },
  { date: '2024-05-21', new: 82, loyal: 140 },
  { date: '2024-05-22', new: 81, loyal: 120 },
  { date: '2024-05-23', new: 252, loyal: 290 },
  { date: '2024-05-24', new: 294, loyal: 220 },
  { date: '2024-05-25', new: 201, loyal: 250 },
  { date: '2024-05-26', new: 213, loyal: 170 },
  { date: '2024-05-27', new: 420, loyal: 460 },
  { date: '2024-05-28', new: 233, loyal: 190 },
  { date: '2024-05-29', new: 78, loyal: 130 },
  { date: '2024-05-30', new: 340, loyal: 280 },
  { date: '2024-05-31', new: 178, loyal: 230 },
  { date: '2024-06-01', new: 178, loyal: 200 },
  { date: '2024-06-02', new: 470, loyal: 410 },
  { date: '2024-06-03', new: 103, loyal: 160 },
  { date: '2024-06-04', new: 439, loyal: 380 },
  { date: '2024-06-05', new: 88, loyal: 140 },
  { date: '2024-06-06', new: 294, loyal: 250 },
  { date: '2024-06-07', new: 323, loyal: 370 },
  { date: '2024-06-08', new: 385, loyal: 320 },
  { date: '2024-06-09', new: 438, loyal: 480 },
  { date: '2024-06-10', new: 155, loyal: 200 },
  { date: '2024-06-11', new: 92, loyal: 150 },
  { date: '2024-06-12', new: 492, loyal: 420 },
  { date: '2024-06-13', new: 81, loyal: 130 },
  { date: '2024-06-14', new: 426, loyal: 380 },
  { date: '2024-06-15', new: 307, loyal: 350 },
  { date: '2024-06-16', new: 371, loyal: 310 },
  { date: '2024-06-17', new: 475, loyal: 520 },
  { date: '2024-06-18', new: 107, loyal: 170 },
  { date: '2024-06-19', new: 341, loyal: 290 },
  { date: '2024-06-20', new: 408, loyal: 450 },
  { date: '2024-06-21', new: 169, loyal: 210 },
  { date: '2024-06-22', new: 317, loyal: 270 },
  { date: '2024-06-23', new: 480, loyal: 530 },
  { date: '2024-06-24', new: 132, loyal: 180 },
  { date: '2024-06-25', new: 141, loyal: 190 },
  { date: '2024-06-26', new: 434, loyal: 380 },
  { date: '2024-06-27', new: 448, loyal: 490 },
  { date: '2024-06-28', new: 149, loyal: 200 },
  { date: '2024-06-29', new: 103, loyal: 160 },
  { date: '2024-06-30', new: 446, loyal: 400 },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  new: {
    label: 'New Patients',
    color: 'hsl(var(--chart-1))',
  },
  loyal: {
    label: 'Loyal Patients',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function VisitorInsightChart() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState('30d');

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('7d');
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Total Visitors</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">
            Last{' '}
            {timeRange === '7d'
              ? 'week'
              : timeRange === '30d'
              ? 'month'
              : '3 months'}
          </span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillNew" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-new)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-new)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLoyal" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-loyal)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-loyal)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="loyal"
              type="natural"
              fill="url(#fillLoyal)"
              stroke="var(--color-loyal)"
              stackId="a"
            />
            <Area
              dataKey="new"
              type="natural"
              fill="url(#fillNew)"
              stroke="var(--color-new)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
