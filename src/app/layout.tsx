import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TailAdmin',
  description: 'Built by Johurul',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />

            <div className="flex flex-1 flex-col p-6 bg-[#f9fafb]">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
