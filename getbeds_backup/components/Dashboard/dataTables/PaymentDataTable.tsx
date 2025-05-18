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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function PaymentDataTable() {
  const bookings = [
    {
      patientName: 'Sameer Kad',
      bookingId: '#123456',
      checkInDate: '14/10/24',
      paymentMode: 'Online',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 9,908',
      paymentStatus: 'Paid',
    },
    {
      patientName: 'Ashu Kumar',
      bookingId: '#678965',
      checkInDate: '13/09/24',
      paymentMode: 'Offline',
      bookingStatus: 'Pending',
      bookingAmount: 'Rs. 12,908',
      paymentStatus: 'Pending',
    },
    {
      patientName: 'Sameer Kad',
      bookingId: '#567890',
      checkInDate: '12/09/24',
      paymentMode: 'Online',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 6,890',
      paymentStatus: 'Pending',
    },
    {
      patientName: 'Sameer Kad',
      bookingId: '#123890',
      checkInDate: '10/09/24',
      paymentMode: 'Online',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 16,908',
      paymentStatus: 'Paid',
    },
    {
      patientName: 'Sameer Kad',
      bookingId: '#567891',
      checkInDate: '06/09/24',
      paymentMode: 'Offline',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 34,908',
      paymentStatus: 'Pending',
    },
    {
      patientName: 'Sameer Kad',
      bookingId: '#234567',
      checkInDate: '01/09/24',
      paymentMode: 'Online',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 23,098',
      paymentStatus: 'Pending',
    },
    {
      patientName: 'Sameer Kad',
      bookingId: '#237654',
      checkInDate: '26/08/24',
      paymentMode: 'Online',
      bookingStatus: 'Confirmed',
      bookingAmount: 'Rs. 12,908',
      paymentStatus: 'Paid',
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            All Bookings
          </h2>
          <p className="text-sm text-muted-foreground">
            Bookings from Jun 2020 - Jan 2024
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Button className=" text-white">
            {' '}
            <Download />
            Download Report
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patients Name</TableHead>
              <TableHead>Booking ID</TableHead>
              <TableHead>Check-in-Date</TableHead>
              <TableHead>Payment Mode</TableHead>
              <TableHead>Booking Status</TableHead>
              <TableHead>Booking Amount</TableHead>
              <TableHead>Payment Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.bookingId}>
                <TableCell className="font-medium">
                  {booking.patientName}
                </TableCell>
                <TableCell>{booking.bookingId}</TableCell>
                <TableCell>{booking.checkInDate}</TableCell>
                <TableCell>{booking.paymentMode}</TableCell>
                <TableCell>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.bookingStatus === 'Confirmed'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}
                  >
                    {booking.bookingStatus}
                  </span>
                </TableCell>
                <TableCell>{booking.bookingAmount}</TableCell>
                <TableCell>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.paymentStatus === 'Paid'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground">
        Showing data 1 to 8 of 255K entries
      </p>
      <div className="flex items-center justify-between">
        <Pagination className="">
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
    </div>
  );
}
