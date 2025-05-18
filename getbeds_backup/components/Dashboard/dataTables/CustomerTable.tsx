import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Download,
  Filter,
  MoreVertical,
  Plus,
  Settings,
  Trash,
} from 'lucide-react';
import Image from 'next/image';

const customers = [
  {
    id: 1,
    name: 'Alice Smith',
    patientId: '#123456',
    paymentMethod: 'visa',
    cardNumber: '****-**18',
    categories: ['Bed Booking', 'Labtest', 'Medicines'],
    clickthrough: 40,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    patientId: '#7809903',
    paymentMethod: 'mastercard',
    cardNumber: '****-**99',
    categories: ['Bed Booking'],
    clickthrough: 10,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 3,
    name: 'Clara Garcia',
    patientId: '#768929',
    paymentMethod: 'mastercard',
    cardNumber: '****-**14',
    categories: ['Labtest', 'Home Service'],
    clickthrough: 80,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 4,
    name: 'David Brown',
    patientId: '#5679287',
    paymentMethod: 'visa',
    cardNumber: '****-**50',
    categories: ['Labtest', 'Medicines'],
    clickthrough: 60,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 5,
    name: 'Emma Lee',
    patientId: '#7801223',
    paymentMethod: 'mastercard',
    cardNumber: '****-**19',
    categories: ['Medicines'],
    clickthrough: 40,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 6,
    name: 'Frank Wong',
    patientId: '#5689001',
    paymentMethod: 'visa',
    cardNumber: '****-**80',
    categories: ['Labtest', 'Medicines'],
    clickthrough: 20,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 7,
    name: 'Grace Taylor',
    patientId: '#4568929',
    paymentMethod: 'mastercard',
    cardNumber: '****-**96',
    categories: ['Bed Booking', 'Medicines'],
    clickthrough: 40,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
  {
    id: 8,
    name: 'Isabella Clark',
    patientId: '#5678932',
    paymentMethod: 'visa',
    cardNumber: '****-**28',
    categories: ['Labtest', 'Medicines'],
    clickthrough: 20,
    profileImage: 'https://api.dicebear.com/9.x/lorelei/svg',
  },
];

export function CustomerTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Your Customers</h2>
          <Badge
            variant="outline"
            className="rounded-full bg-primary/10 text-primary"
          >
            New
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <div className="grid grid-cols-12 gap-4 border-b bg-muted/40 p-4 text-sm font-medium">
          <div className="col-span-3">Full Name</div>
          <div className="col-span-2">Payment Methods</div>
          <div className="col-span-3">Category</div>
          <div className="col-span-3">Clickthrough Percentage</div>
          <div className="col-span-1"></div>
        </div>

        {customers.map((customer) => (
          <div
            key={customer.id}
            className="grid grid-cols-12 items-center gap-4 border-b p-4"
          >
            <div className="col-span-3 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <img
                  src={customer.profileImage}
                  className="w-16 h-16 object-cover"
                  alt={customer.name}
                />
              </div>
              <div>
                <p className="font-medium">{customer.name}</p>
                <p className="text-sm text-muted-foreground">
                  {customer.patientId}
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                {customer.paymentMethod === 'visa' ? (
                  <div className="flex h-6 w-10 items-center justify-center rounded bg-blue-100 text-xs font-bold text-blue-800">
                    VISA
                  </div>
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  </div>
                )}
                <span className="text-sm">Ends in {customer.cardNumber}</span>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-wrap gap-1">
                {customer.categories.map((category, index) => {
                  let color = '';
                  if (category === 'Bed Booking')
                    color = 'bg-purple-100 text-purple-800';
                  if (category === 'Labtest')
                    color = 'bg-amber-100 text-amber-800';
                  if (category === 'Medicines')
                    color = 'bg-red-100 text-red-800';
                  if (category === 'Home Service')
                    color = 'bg-green-100 text-green-800';

                  return (
                    <span
                      key={index}
                      className={`rounded-full px-2 py-1 text-xs font-medium ${color}`}
                    >
                      {category}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <Progress value={customer.clickthrough} className="h-2" />
                <span className="text-sm">{customer.clickthrough}%</span>
              </div>
            </div>
            <div className="col-span-1 flex justify-end gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
