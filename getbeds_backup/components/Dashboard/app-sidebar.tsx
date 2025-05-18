'use client';
import {
  Bed,
  Home,
  LogsIcon,
  Settings,
  Banknote,
  PackageCheck,
  BadgeAlert,
  Activity,
  BrainCircuit,
  Zap,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Booking',
    url: '/dashboard/bookings',
    icon: Bed,
  },
  {
    title: 'Rate & Inventory',
    url: '/dashboard/inventory',
    icon: PackageCheck,
  },

  {
    title: 'Payments',
    url: '/dashboard/payments',
    icon: Banknote,
  },
  {
    title: 'Analytics',
    url: '/dashboard/analytics',
    icon: Activity,
  },
  {
    title: 'Hospital Information',
    url: '/dashboard/hospital-information',
    icon: Settings,
  },
  // {
  //   title: 'Customer Complaints',
  //   url: '#',
  //   icon: BadgeAlert,
  // },
  {
    title: 'Grow you business',
    url: '/dashboard/grow-your-business',
    icon: Activity,
  },

  {
    title: 'Learning Centre',
    url: '/dashboard/learning-centre',
    icon: BrainCircuit,
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex justify-center items-center">
              <LogsIcon className="bg-[#8950FC] w-16 h-16" />
              <h1 className="text-2xl font-semibold"> GetBeds</h1>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-5">
              {items.map((item, index) => (
                <Link key={index} href={item.url}>
                  <SidebarMenuItem key={item.title} className="ml-3">
                    <SidebarMenuButton
                      asChild
                      className={`text-start text-lg font-medium ${
                        pathname === item.url
                          ? 'bg-zinc-100 text-[#8950FC] dark:bg-zinc-900 border-l-8 hover:text-[#8950FC] border-[#8950FC] overflow-hidden'
                          : ''
                      }`}
                    >
                      <div className="">
                        {item.icon && <item.icon className="" />}
                        <div className="text-base">{item.title}</div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="my-2">
        <div className="relative flex items-center flex-col justify-between bg-primary  rounded-2xl p-4 space-y-2 mx-3">
          <div className="flex items-center flex-col justify-between space-y-2">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">G</span>
            </div>
            <h1 className="text-white font-medium text-xl">GetBeds Pro</h1>
            <p className="text-center text-white/50">
              Get access to all features on tetumbas
            </p>
          </div>

          <Button className="bg-white text-primary" variant={'outline'}>
            <Zap /> Get Pro
          </Button>
          <div
            className="absolute opacity-100 animate-pulse -top-24 -right-14 w-52 h-52 rounded-full bg-white/15 border: 1px solid transparent;
background: linear-gradient(rgb(255 255 255), rgb(255 255 255 / 0.1));
  border-box linear-gradient(rgb(255 255 255), rgb(255 255 255 / 0.1)); "
          ></div>
          <div className="animate-ping absolute -bottom-28 -left-16 w-48 h-48 rounded-full bg-white/15 "></div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
