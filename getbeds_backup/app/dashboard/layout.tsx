import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Dashboard/app-sidebar';
import { NavBar } from '@/components/Dashboard/NavBar';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="bg-gray-50 w-full p-2 ">
        <NavBar />

        <SidebarTrigger />

        <main className="p-3">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
