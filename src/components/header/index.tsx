import avatar from '@/assets/avatar.svg';
import { MoonIcon, Notification } from '@/assets/icons';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';
import { SearchInput } from './search-input';

export function Header() {
  return (
    <header
      className="flex sticky top-0 bg-background shrink-0 items-center
        gap-4 border-b px-6 py-4"
    >
      <SidebarTrigger className="-ml-1 rounded-[8px]" />

      <SearchInput />

      <div className="ml-auto space-x-3">
        <button className="rounded-full border p-3">
          <span className="sr-only">Toggle color scheme</span>
          <MoonIcon />
        </button>

        <button className="relative rounded-full border p-3">
          <span className="sr-only">Notifications</span>
          <Notification />
          <span className="absolute right-1.5 top-0 size-2 rounded-full bg-[#fd853a] ring-2 ring-white"></span>
        </button>
      </div>

      <Button variant="ghost" className="px-3 h-11 hover:text-current">
        <Image
          src={avatar}
          className="rounded-full object-cover mr-1 size-full"
          alt=""
          role="presentation"
        />

        <span className="font-medium">Emirhan Boruch</span>

        <ChevronDown />
      </Button>
    </header>
  );
}
