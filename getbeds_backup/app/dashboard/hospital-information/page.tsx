import dynamic from 'next/dynamic';
import React from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';

import Link from 'next/link';
import { Search, Calendar, SlidersHorizontal, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const HospitalForm = dynamic(
  () => import('@/components/Dashboard/HospitalForm'),
  {
    loading: () => <p>Loading...</p>,
  }
);

const page = () => {
  return (
    <div>
      {/* Emergency Call Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <Avatar className="h-16 w-16 bg-gray-200">
                {/* Avatar content would go here */}
              </Avatar>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold flex items-center">
                    EMERGENCY CALL{' '}
                    <AlertTriangle className="h-4 w-4 ml-1 text-red-600" />
                  </span>
                </div>
                <p className="text-gray-600">Name, Contact Details</p>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" /> Location
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-gray-500 text-sm">Today</div>
              <Link
                href="/dashboard/hospital-information/emergency-call-list"
                className="text-gray-600 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Explore List
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Respond
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="relative w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
        <p className="text-gray-500">(Hospital photo and video)</p>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
          <span className="h-2 w-2 rounded-full bg-white"></span>
          <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Search Section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Search by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="patient-id">Patient ID</SelectItem>
                        <SelectItem value="patient-name">
                          Patient Name
                        </SelectItem>
                        <SelectItem value="contact-number">
                          Contact Number
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="relative flex-1">
                      <Input placeholder="Patient ID/Name..." />
                      <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Add Filter Section */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in-Date</label>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Check-in-Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value="last-week">Last Week</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-between text-left font-normal"
                        >
                          <span>04 Nov 2024 - 12 Nov 2024</span>
                          <Calendar className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="range"
                          defaultMonth={new Date(2024, 10)}
                          selected={{
                            from: new Date(2024, 10, 4),
                            to: new Date(2024, 10, 12),
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Filter Button */}
                <div className="flex items-end">
                  <Button variant="outline" className="">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex gap-4 mb-6">
                      <Button variant="outline">Upload Tests</Button>
                      <Button variant="outline">Explore Patients List</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <HospitalForm />
        </div>
        <div>
          <PatientCard />
        </div>
      </div>
    </div>
  );
};

export default page;

const PatientCard = () => {
  return (
    <Card className="max-w-sm mx-auto rounded-2xl shadow-lg p-6 bg-white">
      <CardContent className="flex flex-col items-center">
        <Avatar className="h-24 w-24 bg-gray-200 mb-4" />

        <div className="text-center space-y-1 mb-4">
          <p className="text-xl font-semibold text-gray-700">1234567</p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-gray-600">Name:</span>{' '}
            <span className="text-gray-900">John Doe</span>
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-gray-600">Age:</span> 17
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-gray-600">Contact:</span>{' '}
            9876543678
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-gray-600">Check-in-Date:</span>{' '}
            12/11/24
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-gray-600">Booking ID:</span>{' '}
            #123456
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge className="bg-blue-100 text-blue-700">Bed Booking</Badge>
          <Badge className="bg-red-100 text-red-600">Medicines</Badge>
          <Badge className="bg-green-100 text-green-700">Payment Done</Badge>
        </div>

        <div className="flex gap-3 w-full">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            View Report
          </Button>
          <Button variant="outline" className="w-full">
            View all Patients
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
