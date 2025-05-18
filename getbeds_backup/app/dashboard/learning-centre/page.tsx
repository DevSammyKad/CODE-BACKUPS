import { ClientCarousel } from '@/components/Dashboard/carousels/ClientCarousel';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-5 flex items-center justify-between my-5 pr-10">
        <div>
          <h1 className="text-xl font-semibold leading-none tracking-tight">
            Learning that will increase your Bookings!
          </h1>
          <p className="text-sm text-muted-foreground my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            ullamcorper, augue at commodo interdum, turpis nisi convallis
            ligula, vitae dignissim elit erat nec nullam.
          </p>
        </div>
        <div>
          <Image
            src={'/images/LearningCentre.png'}
            alt="Learning Centre"
            className="w-[100px] h-[100px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="w-full p-4 bg-white rounded-lg shadow-sm gap-y-10">
        <ClientCarousel title="Most Popular" />
        <ClientCarousel title="Trending this week" />
        <ClientCarousel title="Explore all" />
      </div>
    </div>
  );
};

export default page;
