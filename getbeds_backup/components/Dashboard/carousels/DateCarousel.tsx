'use client';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type DayInfo = {
  day: string;
  date: number;
  month: string;
  isActive: boolean;
};

const DateCarousel = () => {
  const [days, setDays] = useState<DayInfo[]>([
    { day: 'SAT', date: 9, month: 'Nov', isActive: false },
    { day: 'SUN', date: 10, month: 'Nov', isActive: false },
    { day: 'MON', date: 11, month: 'Nov', isActive: false },
    { day: 'TUE', date: 12, month: 'Nov', isActive: true },
    { day: 'WED', date: 13, month: 'Nov', isActive: false },
    { day: 'THU', date: 14, month: 'Nov', isActive: false },
    { day: 'FRI', date: 15, month: 'Nov', isActive: false },
  ]);

  const handleDayClick = (index: number) => {
    const newDays = days.map((day, i) => ({
      ...day,
      isActive: i === index,
    }));
    setDays(newDays);
  };

  return (
    <div className="relative w-full rounded-2xl border border-blue-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border-blue-100 bg-white text-gray-500"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous week</span>
        </Button>

        <div className="flex w-full justify-between px-8">
          {days.map((day, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center rounded-lg p-2 transition-colors ${
                day.isActive
                  ? 'text-purple-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => handleDayClick(index)}
            >
              <span className="text-xs font-medium">{day.day}</span>
              <span
                className={`text-2xl font-bold ${
                  day.isActive
                    ? 'text-purple-900 text-8xl'
                    : days[index - 1]?.isActive || days[index + 1]?.isActive
                    ? 'text-6xl'
                    : 'text-gray-500'
                }`}
              >
                {day.date}
              </span>

              <span className="text-xs ">{day.month}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full border-blue-100 bg-white text-gray-500"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next week</span>
        </Button>
      </div>
    </div>
  );
};

export default DateCarousel;
