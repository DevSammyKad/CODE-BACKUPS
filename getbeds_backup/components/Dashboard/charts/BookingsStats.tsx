import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function BookingsStats() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">
          Rooms Availability
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div>
            <span className="text-4xl font-bold">500</span>
            <p className="text-sm text-gray-500">Total Bookings</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-500">Lorem Ipsum</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="flex h-full w-full">
                <div className="h-full w-[70%] bg-green-500"></div>
                <div className="h-full w-[15%] bg-pink-500"></div>
                <div className="h-full w-[15%] bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lorem Ipsum</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lorem Ipsum</span>
              <span className="text-sm font-medium">21,890</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lorem Ipsum</span>
              <span className="text-sm font-medium">12,890</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Lorem Ipsum</span>
              <span className="text-sm font-medium">10,890</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
