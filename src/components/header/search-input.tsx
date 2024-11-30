import { cn } from '@/lib/utils';
import { Command, Search } from 'lucide-react';
import { Input } from '../ui/input';

export function SearchInput() {
  return (
    <div className="relative w-full max-w-sm text-light-gray/90">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
      <Input
        type="text"
        placeholder="Search or type command..."
        className="pl-12 pr-20 rounded-[8px] bg-[#F9FAFB]"
      />
      <kbd
        className={cn(
          'pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 transform rounded-[8px] border bg-neutral-50 px-2 py-0.5 text-[12px] font-medium opacity-100 transition-opacity flex items-center gap-1'
        )}
      >
        <div>
          <span className="sr-only">Command</span>
          <Command className="size-3" />
        </div>
        <span>K</span>
      </kbd>
    </div>
  );
}
