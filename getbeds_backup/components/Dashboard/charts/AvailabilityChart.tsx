'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AvailabilityChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;

    // Draw donut chart
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const innerRadius = 50;

    // Data for the chart
    const data = [
      { value: 65, color: '#22c55e' }, // Green - Available Beds
      { value: 20, color: '#f97316' }, // Orange - Future Bookings
      { value: 15, color: '#ef4444' }, // Red - Booked Beds
    ];

    let startAngle = 0;

    // Draw each segment
    data.forEach((segment) => {
      const endAngle = startAngle + (segment.value / 100) * 2 * Math.PI;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      ctx.fillStyle = segment.color;
      ctx.fill();

      startAngle = endAngle;
    });

    // Draw center circle (white)
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  }, []);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">
          Rooms Availability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative mb-4 flex justify-center">
            <canvas ref={canvasRef} width="200" height="200"></canvas>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-lg font-bold">15%</div>
              <div className="text-lg font-bold">20%</div>
              <div className="text-lg font-bold">65%</div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-orange-500"></div>
                <span className="text-sm">Future Bookings</span>
              </div>
              <span className="text-sm font-medium">21,890</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Available Beds</span>
              </div>
              <span className="text-sm font-medium">12,890</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                <span className="text-sm">Booked Beds</span>
              </div>
              <span className="text-sm font-medium">10,890</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
