import { VisitorInsightChart } from '@/components/Dashboard/charts/VisitorInsightChart';
import OffersCarousel from '@/components/Dashboard/OffersCarousel';
import { CreatePatientForm } from '@/components/Dashboard/Forms/CreatePatientForm';
import { CreateStaffForm } from '@/components/Dashboard/Forms/CreateStaffForm';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Download, LucideSpade } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const cardData = [
  {
    id: 1,
    icon: <LucideSpade />,
    count: 100,
    title: 'Beds Booked',
    status: '+8% from yesterday',
    bgColor: 'bg-[#FFE2E5]',
    icons: '/images/dashboardIcon1.png',
  },
  {
    id: 2,
    icon: <LucideSpade />,
    count: 1000,
    title: 'Total Orders',
    status: '+8% from yesterday',
    bgColor: 'bg-[#FFF4DE]',
    icons: '/images/dashboardIcon2.png',
  },
  {
    id: 3,
    icon: <LucideSpade />,
    count: 10400,
    title: 'Medicines Sold',
    status: '+8% from yesterday',
    bgColor: 'bg-[#DCFCE7]',
    icons: '/images/dashboardIcon3.png',
  },

  {
    id: 4,
    icon: <LucideSpade />,
    count: 10030,
    title: 'Home Service',
    status: '0.8% from yesterday',
    bgColor: 'bg-[#F3E8FF]',
    icons: '/images/dashboardIcon4.png',
  },
];

const page = () => {
  return (
    <div className="">
      {/* <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
        {cardData.map((card) => (
          <Card className={`@container/card ${card.bgColor}`} key={card.id}>
            <CardHeader className="relative">
              <CardDescription>{card.title}</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                {card.count}
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  {card.status}
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
        <Card className="rounded-lg col-span-2">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span> Performance Overview</span>{' '}
              <Button>
                {' '}
                <Download /> Download
              </Button>
            </CardTitle>
            <CardDescription>
              View your performance metrics and track your progress
              {/* <span className="text-xs text-muted-foreground">
                Last updated 2 days ago
              </span> */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-5">
              {cardData.map((card) => (
                <div
                  key={card.count}
                  className={`flex flex-col gap-4 rounded-xl  p-5 ${card.bgColor}`}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={card.icons}
                      alt={card.title}
                      width={500}
                      height={500}
                      className="rounded-full w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>

                  <p className="text-2xl font-bold">{card.count}</p>

                  <p className="text-sm text-green-500">{card.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <VisitorInsightChart />
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 my-5 gap-5">
        <div className="col-span-2 rounded-lg bg-white">
          <VisitorInsightChart />
        </div>{' '}
        <OffersCarousel />
      </div>

      <CreatePatientForm />
      <CreateStaffForm />
    </div>
  );
};

export default page;
