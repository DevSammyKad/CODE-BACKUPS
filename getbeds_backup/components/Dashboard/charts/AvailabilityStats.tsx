import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AvailabilityStats() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">
          Rooms Availability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-1">
          <div className="flex items-baseline justify-between">
            <span className="text-4xl font-bold">92.5%</span>
          </div>
          <p className="text-sm text-gray-500">Lorem Ipsum</p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">May</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="flex h-full w-full">
                  <div className="h-full w-[60%] bg-pink-500"></div>
                  <div className="h-full w-[10%] bg-orange-300"></div>
                  <div className="h-full w-[30%] bg-pink-200"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm">June</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="flex h-full w-full">
                  <div className="h-full w-[50%] bg-pink-500"></div>
                  <div className="h-full w-[15%] bg-orange-300"></div>
                  <div className="h-full w-[35%] bg-pink-200"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-sm bg-pink-500"></div>
              <span className="text-xs text-gray-500">Lorem Ipsum</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-sm bg-blue-500"></div>
              <span className="text-xs text-gray-500">Lorem Ipsum</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-sm bg-pink-200"></div>
              <span className="text-xs text-gray-500">Lorem Ipsum</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>20%</span>
            <span>40%</span>
            <span>60%</span>
            <span>80%</span>
            <span>100%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
