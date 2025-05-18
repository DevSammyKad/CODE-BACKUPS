import { Card } from '@/components/ui/card';
import { IndianRupeeIcon } from 'lucide-react';
import React from 'react';
import PaymentDataTable from '@/components/Dashboard/dataTables/PaymentDataTable';

const page = () => {
  return (
    <div>
      <Card className="my-5">
        <div className="flex flex-col gap-4 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            <div className="flex flex-col gap-4 rounded-xl  p-5 bg-[#FFE2E5]">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Amount Payable</h3>
              </div>
              <p className="text-2xl font-bold flex items-center space-x-2">
                <IndianRupeeIcon />
                10,000
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl  p-5 bg-[#FFF4DE]">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Total Payment Done</h3>
              </div>
              <p className="text-2xl font-bold flex items-center space-x-2">
                <IndianRupeeIcon />
                40,000
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl  p-5 bg-[#DCFCE7]">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold flex items-center space-x-2">
                  Pending
                </p>
              </div>
              <p className="text-2xl font-bold flex items-center space-x-2">
                <IndianRupeeIcon />
                300
              </p>
            </div>
          </div>
        </div>
      </Card>

      <PaymentDataTable />
    </div>
  );
};

export default page;
