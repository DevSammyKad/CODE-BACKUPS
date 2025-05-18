'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';
import {
  Search,
  BarChart3,
  Building2,
  Users,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// const [offerData, setOfferData] = useState([])

// useEffect(() => {
//   // Fetch data from your API
//   const fetchData = async () => {
//     const response = await fetch('/api/offers')
//     const data = await response.json()
//     setOfferData(data)
//   }

//   fetchData()
// }, [])

// const handleModify = async (id: number) => {
//   // Navigate to edit page or open modal
//   router.push(`/offers/edit/${id}`)
// }

// const handleRecreate = async (id: number) => {
//   try {
//     const response = await fetch(`/api/offers/${id}/recreate`, {
//       method: 'POST',
//     })
//     // Handle success and refresh data
//     if (response.ok) {
//       fetchData()
//     }
//   } catch (error) {
//     console.error('Error recreating offer:', error)
//   }
// }

const offerData = [
  {
    id: 1,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Basic Offer',
    startDate: '12/11/24',
    endDate: '20/11/24',
    discount: '30%',
    status: 'Active Now',
    revenue: 'Rs. 2000',
  },
  {
    id: 2,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Mega Offer',
    startDate: '02/11/24',
    endDate: '10/11/24',
    discount: '50%',
    status: 'Expired',
    revenue: 'Rs. 3000',
  },
  {
    id: 3,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Super Offer',
    startDate: '01/11/24',
    endDate: '09/11/24',
    discount: '25%',
    status: 'Active Now',
    revenue: 'Rs. 1500',
  },
  {
    id: 4,
    name: 'David Brown\nPatient #5679287',
    type: 'Promo Code',
    startDate: '30/10/24',
    endDate: '07/11/24',
    discount: '15%',
    status: 'Active Now',
    revenue: 'Rs. 1200',
  },
  {
    id: 5,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Black Sale Friday',
    startDate: '25/11/24',
    endDate: '27/11/24',
    discount: '70%',
    status: 'Upcoming',
    revenue: 'Rs. 0',
  },
  {
    id: 6,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Basic Offer',
    startDate: '15/10/24',
    endDate: '25/10/24',
    discount: '20%',
    status: 'Expired',
    revenue: 'Rs. 4500',
  },
  {
    id: 7,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Basic Offer',
    startDate: '05/10/24',
    endDate: '15/10/24',
    discount: '35%',
    status: 'Expired',
    revenue: 'Rs. 2800',
  },
  {
    id: 8,
    name: 'Lorem Ipsum\nLorem Ipsum',
    type: 'Basic Offer',
    startDate: '01/10/24',
    endDate: '10/10/24',
    discount: '40%',
    status: 'Expired',
    revenue: 'Rs. 3200',
  },
];

export default function BestOffers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Filter offers based on search term and filter type
  const filteredOffers = offerData.filter((offer) => {
    const matchesSearch =
      offer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.type.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === 'all') return matchesSearch;
    if (filterType === 'active')
      return matchesSearch && offer.status === 'Active Now';
    if (filterType === 'expired')
      return matchesSearch && offer.status === 'Expired';
    if (filterType === 'upcoming')
      return matchesSearch && offer.status === 'Upcoming';

    return matchesSearch;
  });

  const handleModify = (id: number) => {
    // In a real app, this would open a modal or navigate to edit page
    console.log(`Modifying offer ${id}`);
  };

  const handleRecreate = (id: number) => {
    // In a real app, this would clone the offer for editing
    console.log(`Recreating offer ${id}`);
  };
  return (
    <div className="mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-purple-900 mb-6">Best Offers</h1>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid grid-cols-2 max-w-md">
          <TabsTrigger
            value="create"
            className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-none rounded-md"
          >
            Create Offers
          </TabsTrigger>
          <TabsTrigger
            value="track"
            className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-none rounded-md"
          >
            Track Offers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="mt-6">
          <div className="space-y-8">
            {/* Recommended offers section */}
            <div>
              <h2 className="text-sm text-gray-500 mb-4">
                Recommended offers for you
              </h2>

              <div className="bg-purple-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">50% OFF on Rooms</h3>
                    <p className="text-sm mt-1">
                      Grow your business with an offer
                    </p>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="mt-4 bg-white text-purple-900 hover:bg-gray-100"
                    >
                      Active Now
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-6 -right-2">
                      <div className="bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-full transform rotate-12">
                        SALE
                      </div>
                    </div>
                    <Image
                      src="/offer.png"
                      alt="Doctor with sale sign"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Custom offers section */}
            <div>
              <h2 className="text-sm text-gray-500 mb-4">
                Custom offers for you
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Basic Offer */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium">Basic Offer</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Happy Customers with discounts on every order
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="bg-orange-100 rounded-full p-2">
                      <span className="text-orange-500 text-xs font-bold">
                        OFFER
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200"
                    >
                      <span className="mr-1">+</span> Create
                    </Button>
                  </div>
                </div>

                {/* Mega Offer */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium">Mega Offer</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Hurry Up! Grab your dream offer as soon as possible!
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="relative">
                      <Image
                        src="/offer.png"
                        alt="Big offer"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200"
                    >
                      <span className="mr-1">+</span> Create
                    </Button>
                  </div>
                </div>

                {/* Super Offer */}
                <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium">Super Offer</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      It's time for the best offer of year!!!
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="relative">
                      <Image
                        src="/offer.png"
                        alt="Last minute offer"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200"
                    >
                      <span className="mr-1">+</span> Create
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Create your own offer form */}
            <div>
              <h2 className="text-sm text-gray-500 mb-4">
                Create your own offer
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Offer name */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Offer name</label>
                    <Input className="w-full" />
                  </div>

                  {/* Discount percentage */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">
                      Discount percentage
                    </label>
                    <div className="relative">
                      <Input className="w-full pr-8" />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        %
                      </span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Tagline</label>
                    <Input className="w-full" />
                  </div>

                  {/* Service to apply */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">
                      Service to apply
                    </label>
                    <Input className="w-full" />
                  </div>

                  {/* Offer Start Date */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">
                      Offer Start Date
                    </label>
                    <div className="relative">
                      <Input className="w-full" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                      >
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>

                  {/* Offer End Date */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">
                      Offer End Date
                    </label>
                    <div className="relative">
                      <Input className="w-full" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                      >
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Drop image area */}
                <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500 text-sm">Drop any Image</p>
                </div>

                {/* Create button */}
                <div className="flex justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-12">
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="track">
          <div className="space-y-6">
            <p className="text-gray-600">
              All active and expired offers are listed below
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Select defaultValue="all" onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Offers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Offers</SelectItem>
                  <SelectItem value="active">Active Offers</SelectItem>
                  <SelectItem value="expired">Expired Offers</SelectItem>
                  <SelectItem value="upcoming">Upcoming Offers</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative w-full sm:w-auto flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for any offer"
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                      <p className="text-2xl font-bold">Rs. 3,87,908</p>
                      <p className="text-sm text-green-500 mt-1">
                        +3% than last week
                      </p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Rooms Availed
                      </p>
                      <p className="text-2xl font-bold">280</p>
                      <p className="text-sm text-green-500 mt-1">
                        +1% than yesterday
                      </p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">New Users</p>
                      <p className="text-2xl font-bold">+91</p>
                      <p className="text-sm text-gray-500 mt-1">Just updated</p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Bookings Increment
                      </p>
                      <p className="text-2xl font-bold">67%</p>
                      <p className="text-sm text-green-500 mt-1">
                        +55% than last week
                      </p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <div className="flex items-center">
                        Offer Name
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Offer Type</TableHead>
                    <TableHead>Offer Start Date</TableHead>
                    <TableHead>Offer End Date</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Expiring</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOffers.map((offer) => (
                    <TableRow key={offer.id}>
                      <TableCell className="font-medium whitespace-pre-line">
                        {offer.name}
                      </TableCell>
                      <TableCell>{offer.type}</TableCell>
                      <TableCell>{offer.startDate}</TableCell>
                      <TableCell>{offer.endDate}</TableCell>
                      <TableCell>{offer.discount}</TableCell>
                      <TableCell>
                        {offer.status === 'Active Now' && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            Active Now
                          </Badge>
                        )}
                        {offer.status === 'Expired' && (
                          <Badge
                            variant="outline"
                            className="text-gray-500 border-gray-300"
                          >
                            Expired
                          </Badge>
                        )}
                        {offer.status === 'Upcoming' && (
                          <Badge className="bg-blue-500 hover:bg-blue-600">
                            Upcoming
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{offer.revenue}</TableCell>
                      <TableCell className="text-right">
                        {offer.status === 'Active Now' && (
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                            onClick={() => handleModify(offer.id)}
                          >
                            Modify
                          </Button>
                        )}
                        {offer.status === 'Expired' && (
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                            onClick={() => handleRecreate(offer.id)}
                          >
                            Recreate
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
