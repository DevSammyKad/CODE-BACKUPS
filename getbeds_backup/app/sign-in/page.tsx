import { Card } from '@/components/ui/card';

import {
  BarChart3,
  Building2,
  Cross,
  Ambulance,
  ClipboardList,
} from 'lucide-react';
import LoginForm from '@/components/ui/LoginForm';

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br  from-purple-100 via-white to-purple-100">
      <div className="container mx-auto grid grid-cols-2 max-md:grid-cols-1 w-full gap-10 justify-center items-center">
        <div className="grid gap-4 max-md:hidden">
          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
              <Cross className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Diagnostic Centres</h3>
            <p className="text-sm text-muted-foreground">
              Manage diagnostic centres
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Hospital Beds</h3>
            <p className="text-sm text-muted-foreground">
              Manage beds availability
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
              <Ambulance className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Ambulances</h3>
            <p className="text-sm text-muted-foreground">
              Manage ambulance availability
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
              <ClipboardList className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Bookings</h3>
            <p className="text-sm text-muted-foreground">
              Review Booking Lists & Payments
            </p>
          </Card>
          <Card className="lg:col-span-2 p-6 flex justify-between flex-col items-center ">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Real Time Analytics</h3>
            <p className="text-sm text-muted-foreground">
              View real time data & analytics
            </p>
          </Card>
        </div>
        <div className="mx-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
