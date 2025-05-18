'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  Search,
  FileDown,
  Printer,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

// Dummy data that can be replaced with API calls in the future
const emergencyCalls = [
  {
    id: 'Patient ID: 1234567890',
    patientName: 'John Doe',
    location: '123 Main St, Anytown, USA, 12345',
    dateTime: '2024-11-12, 12:00 AM',
    contactDetails: '+1-555-555-5555',
    status: 'pending',
  },
  {
    id: 'Patient ID: 9876543210',
    patientName: 'Jane Smith',
    location: '456 Elm St, Othertown, USA, 67890',
    dateTime: '2024-11-09, 11:00 PM',
    contactDetails: '+1-555-555-5556',
    status: 'responded',
  },
  {
    id: 'Patient ID: 1112223333',
    patientName: 'Alice Johnson',
    location: '789 Oak St, Thistown, USA, 34567',
    dateTime: '2024-11-08, 10:30 AM',
    contactDetails: '+1-555-555-5557',
    status: 'pending',
  },
  {
    id: 'Patient ID: 4445556666',
    patientName: 'Bob Williams',
    location: '1011 Maple St, Thatcity, USA, 56789',
    dateTime: '2024-11-07, 09:15 PM',
    contactDetails: '+1-555-555-5558',
    status: 'pending',
  },
  {
    id: 'Patient ID: 7778889990',
    patientName: 'Charlie Brown',
    location: '1213 Pine St, Thiscity, USA, 67890',
    dateTime: '2024-11-06, 08:45 AM',
    contactDetails: '+1-555-555-5559',
    status: 'pending',
  },
  {
    id: 'Patient ID: 9990001111',
    patientName: 'David Lee',
    location: '1415 Cedar St, Thecity, USA, 34567',
    dateTime: '2024-11-05, 07:30 PM',
    contactDetails: '+1-555-555-5560',
    status: 'pending',
  },
  {
    id: 'Patient ID: 2223334444',
    patientName: 'Emily Chen',
    location: '1617 Cypress St, Anothercity, USA, 56789',
    dateTime: '2024-11-04, 06:15 AM',
    contactDetails: '+1-555-555-5561',
    status: 'pending',
  },
  {
    id: 'Patient ID: 5556667777',
    patientName: 'Frank Davis',
    location: '1819 Dogwood St, Yetanothercity, USA, 67890',
    dateTime: '2024-11-03, 05:00 PM',
    contactDetails: '+1-555-555-5562',
    status: 'pending',
  },
];

export default function EmergencyCallList() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  //   const [emergencyCalls, setEmergencyCalls] = useState([])

  // useEffect(() => {
  //   // Fetch data from your API
  //   const fetchData = async () => {
  //     const response = await fetch('/api/emergency-calls')
  //     const data = await response.json()
  //     setEmergencyCalls(data)
  //   }

  //   fetchData()
  // }, [])

  const router = useRouter();

  // Filter calls based on active tab
  const filteredCalls = emergencyCalls.filter((call) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'responded') return call.status === 'responded';
    if (activeTab === 'pending') return call.status === 'pending';
    return true;
  });

  // Sort calls based on column and direction
  const sortedCalls = [...filteredCalls].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];

    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };

  const handleSendResponse = (id: string) => {
    // try {
    //     await fetch(`/api/emergency-calls/${id}/respond`, {
    //       method: 'POST',
    //     })
    //     // Refresh data after successful response
    //     fetchData()
    //   } catch (error) {
    //     console.error('Error sending response:', error)
    //   }
  };

  return (
    <div className="px-4 py-6 ">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="sm"
          className="mr-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold text-gray-800">
          Emergency Call List
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search" className="pl-10 w-full" />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <FileDown className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 mb-4">
          <TabsTrigger
            value="all"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All
            <Badge className="ml-2 bg-purple-600 hover:bg-purple-700">
              {emergencyCalls.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="responded"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Responded
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Pending Responses
            <Badge className="ml-2 bg-gray-600 hover:bg-gray-700">
              {
                emergencyCalls.filter((call) => call.status === 'pending')
                  .length
              }
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="w-[200px] cursor-pointer"
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center">
                      ID
                      {sortColumn === 'id' &&
                        (sortDirection === 'asc' ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort('patientName')}
                  >
                    <div className="flex items-center">
                      Patient Name
                      {sortColumn === 'patientName' &&
                        (sortDirection === 'asc' ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort('location')}
                  >
                    <div className="flex items-center">
                      Location
                      {sortColumn === 'location' &&
                        (sortDirection === 'asc' ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort('dateTime')}
                  >
                    <div className="flex items-center">
                      Date & Time
                      {sortColumn === 'dateTime' &&
                        (sortDirection === 'asc' ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort('contactDetails')}
                  >
                    <div className="flex items-center">
                      Contact Details
                      {sortColumn === 'contactDetails' &&
                        (sortDirection === 'asc' ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCalls.map((call, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium whitespace-pre-line">
                      {call.id}
                    </TableCell>
                    <TableCell>{call.patientName}</TableCell>
                    <TableCell>{call.location}</TableCell>
                    <TableCell>{call.dateTime}</TableCell>
                    <TableCell>{call.contactDetails}</TableCell>
                    <TableCell className="text-right">
                      {call.status === 'pending' ? (
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => handleSendResponse(call.id)}
                        >
                          Send Response
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"
                          disabled
                        >
                          Responded
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <div className="text-sm text-gray-500">
              Showing data 1 to 8 of 256K entries
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">40</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>

        <TabsContent value="responded" className="mt-0">
          {/* Same table structure but with responded calls only */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Contact Details</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCalls.map((call, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium whitespace-pre-line">
                      {call.id}
                    </TableCell>
                    <TableCell>{call.patientName}</TableCell>
                    <TableCell>{call.location}</TableCell>
                    <TableCell>{call.dateTime}</TableCell>
                    <TableCell>{call.contactDetails}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-300"
                        disabled
                      >
                        Responded
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <div className="text-sm text-gray-500">
              Showing data 1 to {sortedCalls.length} of {sortedCalls.length}{' '}
              entries
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>

        <TabsContent value="pending" className="mt-0">
          {/* Same table structure but with pending calls only */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Contact Details</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCalls.map((call, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium whitespace-pre-line">
                      {call.id}
                    </TableCell>
                    <TableCell>{call.patientName}</TableCell>
                    <TableCell>{call.location}</TableCell>
                    <TableCell>{call.dateTime}</TableCell>
                    <TableCell>{call.contactDetails}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        onClick={() => handleSendResponse(call.id)}
                      >
                        Send Response
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <div className="text-sm text-gray-500">
              Showing data 1 to {sortedCalls.length} of {sortedCalls.length}{' '}
              entries
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
