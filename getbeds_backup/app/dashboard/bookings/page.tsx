import { Search } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, User, Users } from 'lucide-react';

export default function BookingDashboard() {
  return (
    <div>
      <div className="w-full my-4 p-4 bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
          {/* Total Patients Booked Card */}
          <Card className="border-none shadow-none">
            <CardContent className="p-4 flex justify-center items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Total Patients Booked</p>
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold mr-2">5,423</h3>
                  <span className="text-xs px-1 py-0.5 bg-green-100 text-green-600 rounded flex items-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-0.5"
                    >
                      <path
                        d="M12 19V5M12 5L5 12M12 5L19 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    18% this month
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Premium Members Card */}
          <Card className="border-none shadow-none">
            <CardContent className="p-4 flex justify-center items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <User className="h-6 w-6 text-purple-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Premium Members</p>
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold mr-2">1,893</h3>
                  <span className="text-xs px-1 py-0.5 bg-red-100 text-red-600 rounded flex items-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-0.5"
                    >
                      <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    1% this month
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Now Card */}
          <Card className="border-none shadow-none">
            <CardContent className="p-4 flex justify-center items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-purple-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Active Now</p>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">189</h3>
                  <div className="flex -space-x-2 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-white bg-yellow-${
                          i % 2 === 0 ? '400' : '500'
                        } flex items-center justify-center text-xs text-white overflow-hidden`}
                      >
                        {i <= 4 ? (
                          <img
                            src={`/api/placeholder/24/24`}
                            alt={`User ${i}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>+</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-5 ">
        {/* Sidebar */}
        <div className="bg-white rounded-lg col-span-2 p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Bookings From</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="all" />
                    <Label htmlFor="all" className="text-sm text-gray-500">
                      All Bookings
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="getBeds" />
                    <Label htmlFor="getBeds" className="text-sm text-gray-500">
                      GetBeds
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="offline" />
                    <Label htmlFor="offline" className="text-sm text-gray-500">
                      Offline
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Date Filters</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkIn" />
                    <Label htmlFor="checkIn" className="text-sm text-gray-500">
                      Check-in
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkOut" />
                    <Label htmlFor="checkOut" className="text-sm text-gray-500">
                      Check-out
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bookingDates" />
                    <Label
                      htmlFor="bookingDates"
                      className="text-sm text-gray-500"
                    >
                      Booking Dates
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Booking Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="acknowledged" />
                    <Label
                      htmlFor="acknowledged"
                      className="text-sm text-gray-500"
                    >
                      Acknowledged
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cancelled" />
                    <Label
                      htmlFor="cancelled"
                      className="text-sm text-gray-500"
                    >
                      Cancelled
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pending" />
                    <Label htmlFor="pending" className="text-sm text-gray-500">
                      Pending
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="modified" />
                    <Label htmlFor="modified" className="text-sm text-gray-500">
                      Modified
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="denied" />
                    <Label htmlFor="denied" className="text-sm text-gray-500">
                      Check-in denied
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Payment Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="paymentPending" />
                    <Label
                      htmlFor="paymentPending"
                      className="text-sm text-gray-500"
                    >
                      Pending
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="processed" />
                    <Label
                      htmlFor="processed"
                      className="text-sm text-gray-500"
                    >
                      Processed
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Booking Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beds" />
                    <label htmlFor="beds" className="text-sm text-gray-500">
                      Beds
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Checkbox id="basic" />
                    <label htmlFor="basic" className="text-sm text-gray-500">
                      Basic - 3 Beds
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Checkbox id="intermediate" />
                    <label
                      htmlFor="intermediate"
                      className="text-sm text-gray-500"
                    >
                      Intermediate - 2 Beds
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Checkbox id="advanced" />
                    <label htmlFor="advanced" className="text-sm text-gray-500">
                      Advanced - 1 Bed
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg col-span-7 p-6  w-full">
          <Tabs defaultValue="hospital-beds" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="hospital-beds" className="flex-1 rounded-lg">
                Doctors
              </TabsTrigger>
              <TabsTrigger value="ambulance" className="flex-1">
                Diagnostic Centres
              </TabsTrigger>
              <TabsTrigger value="diagnostic" className="flex-1">
                Diagnostic Centres
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hospital-beds">
              <div className="space-y-4">
                <div className="flex justify-between items-center mt-4">
                  <Select defaultValue="past">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select booking type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="past">Past Bookings</SelectItem>
                      <SelectItem value="upcoming">
                        Upcoming Bookings
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <Select defaultValue="past">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select booking type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="past">Past Bookings</SelectItem>
                      <SelectItem value="upcoming">
                        Upcoming Bookings
                      </SelectItem>
                    </SelectContent>
                  </Select> */}
                  <Select defaultValue="date-range">
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-range">
                        Select Date Range
                      </SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Bookings List</h2>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search" className="pl-8" />
                    </div>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border rounded-lg">
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-left p-4 text-sm">
                          Patient's Name
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Booking ID
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Stay Duration
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Room Plan
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Contact
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Amount
                        </TableHead>
                        <TableHead className="text-left p-4 text-sm">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="p-4">Jane Cooper</TableCell>
                        <TableCell className="p-4">#123456</TableCell>
                        <TableCell className="p-4">3 days + 2 nights</TableCell>
                        <TableCell className="p-4">
                          Basic + 1 Meal + xyz
                          <Badge className="ml-2">Premium</Badge>
                        </TableCell>
                        <TableCell className="p-4 ">
                          +91-5437889904
                          <Button variant="outline" size="sm">
                            Print Invoice
                          </Button>
                        </TableCell>

                        <TableCell className="p-4 flex flex-col items-center gap-3">
                          Rs. 9,908
                          <Badge variant="secondary">Processed</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing data 1 to 6 of 256k entries
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-primary text-primary-foreground"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      4
                    </Button>
                    <span>...</span>
                    <Button variant="outline" size="sm">
                      40
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
