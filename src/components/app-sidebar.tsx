import { ChevronRight } from 'lucide-react';
import * as React from 'react';

import { SquaresIcon } from '@/assets/icons';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Logo } from './logo';

const MENU = [
  {
    title: 'Dashboard',
    Icon: SquaresIcon,
    items: [
      {
        title: 'Stocks',
        url: '/',
        isActive: true,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="px-5 py-8" {...props}>
      <SidebarHeader>
        <Logo />

        <div className="mt-7 mb-2.5 text-sm text-light-gray/85">MENU</div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {MENU.map(({ Icon, ...item }) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent px-3 h-9 mb-1"
              >
                <CollapsibleTrigger>
                  <Icon className="mr-2" />
                  {item.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="pl-5">
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>NEW</SidebarMenuBadge>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
