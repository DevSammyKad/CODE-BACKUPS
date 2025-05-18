'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const OffersCarousel = () => {
  return (
    <Card className="rounded-lg ">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Best Offers for you
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: 'start',
          }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[350px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-2/6 h-[250px]">
                <div className="p-1 ">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 bg-gray-200 animate-pulse">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default OffersCarousel;
