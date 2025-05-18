import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type iAppsProps = {
  title: string;
};
export function ClientCarousel({ title }: iAppsProps) {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full "
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold leading-none tracking-tight my-3">
            {title}
          </h1>
          <div className="flex space-x-5">
            <CarouselPrevious className="relative right-0 left-0" />
            <CarouselNext className="relative m-0 p-0 right-0 left-0" />
          </div>
        </div>

        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/4 container mx-auto"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square w-[300px] h-[200px] items-center justify-center p-6 transform scale-100 transition-transform duration-200 ease-in-out">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
