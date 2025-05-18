import { Button } from '@/components/ui/button';
import { ChevronRight, Plus, Minus, Filter } from 'lucide-react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AvailabilityChart } from '@/components/Dashboard/charts/AvailabilityChart';
import { BookingsStats } from '@/components/Dashboard/charts/BookingsStats';
import { AvailabilityStats } from '@/components/Dashboard/charts/AvailabilityStats';
import DateCarousel from '@/components/Dashboard/carousels/DateCarousel';

export default function ManageRooms() {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manage Hospital Beds
          </h1>
          <p className="text-gray-500">Lorem Ipsum</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <Select defaultValue="name">
                <SelectTrigger className="w-[150px] ">
                  <SelectValue placeholder="Search by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Search by</SelectItem>
                  <SelectItem value="room">Room</SelectItem>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Check-in-date"
                  className="pl-3 pr-10  "
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full rounded-l-none"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Filter />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium">Filter By</span>
              <Select defaultValue="week">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="biweek">Bi-Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select defaultValue="month">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="january">January</SelectItem>
                <SelectItem value="february">February</SelectItem>
                <SelectItem value="november">November</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="year">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="year">Year</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DateCarousel />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <AvailabilityStats />
          <BookingsStats />
          <AvailabilityChart />
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            variant="default"
            className="bg-purple-500 hover:bg-purple-600"
          >
            <span className="mr-2">Add Inventory</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Manage Rooms</h1>

        {/* Room 1 - Standard */}
        <div className="border rounded-md">
          <div className="flex items-center p-4 border-b">
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">Room 1 - Standard</span>
            <div className="ml-auto bg-purple-600 rounded-full p-1">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="px-4 py-2">
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <Input value="1" className="text-center" />
                <Input value="2" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="1" className="text-center" />
                <Input value="0" className="text-center" />
              </div>
            </div>

            {/* Bed No. 1 */}
            <div className="border-t pt-2">
              <div className="flex items-center py-2 px-4">
                <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm">Bed No. 1</span>
                <Button
                  variant="link"
                  size="sm"
                  className="ml-auto text-xs text-blue-600 p-0"
                >
                  Edit Rates
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-2 mt-2 px-4 pb-4">
                <div className="col-span-1"></div>
                <div className="col-span-6 grid grid-cols-7 gap-2">
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 14,235
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 12,890
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 11,789
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 7,890
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 12,890
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 21,789
                  </div>
                  <div className="border rounded p-2 text-center text-sm">
                    Rs. 8,567
                  </div>
                </div>
              </div>
            </div>

            {/* Bed No. 2 */}
            <div className="border-t pt-2">
              <div className="flex items-center py-2 px-4">
                <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm">Bed No. 2</span>
                <div className="ml-auto">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Bed No. 3 */}
            <div className="border-t pt-2">
              <div className="flex items-center py-2 px-4">
                <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm">Bed No. 3</span>
                <div className="ml-auto">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Bed No. 4 */}
            <div className="border-t pt-2">
              <div className="flex items-center py-2 px-4">
                <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm">Bed No. 4</span>
                <div className="ml-auto">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room 2 - Deluxe */}
        <div className="border rounded-md">
          <div className="flex items-center p-4">
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
              <Plus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">Room 2 - Deluxe</span>
            <div className="ml-auto bg-purple-600 rounded-full p-1">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="px-4 py-2 border-t">
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <Input value="1" className="text-center" />
                <Input value="2" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="1" className="text-center" />
                <Input value="0" className="text-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Room 3 - Deluxe */}
        <div className="border rounded-md">
          <div className="flex items-center p-4">
            <Button variant="ghost" size="sm" className="p-0 h-6 w-6 mr-2">
              <Plus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">Room 3 - Deluxe</span>
            <div className="ml-auto bg-purple-600 rounded-full p-1">
              <ChevronRight className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="px-4 py-2 border-t">
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
                <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Available
                </div>
                <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded text-center">
                  Sold
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="col-span-1"></div>
              <div className="col-span-6 grid grid-cols-7 gap-2">
                <Input value="1" className="text-center" />
                <Input value="2" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="0" className="text-center" />
                <Input value="1" className="text-center" />
                <Input value="0" className="text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
