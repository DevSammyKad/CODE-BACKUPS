import { Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function NavBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left side - Logo/Title */}
      <h1 className="text-3xl font-bold text-purple-900">Hospital Panel</h1>

      {/* Middle - Search */}
      <div className="relative max-w-md w-full mx-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-purple-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Input
          type="text"
          placeholder="Search here..."
          className="pl-10 pr-4 py-2 border-0 rounded-full bg-gray-100 focus:ring-purple-500 focus:border-purple-500 w-full"
        />
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center space-x-6">
        {/* Profile Score */}
        <div className="text-right mr-2">
          <p className="text-purple-900 font-semibold">Profile Score</p>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-6 w-6 text-gray-500" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-amber-400 text-white text-xs">
              1
            </Badge>
          </Button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 border-2 border-gray-200">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
