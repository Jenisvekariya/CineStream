import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <DashboardSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="p-4 md:p-8 mt-16">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
