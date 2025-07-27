"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "../ui/button"
import { Paintbrush, CaseUpper, CheckSquare, ToyBrick, Type, CreditCard, Home } from "lucide-react"

const menuItems = [
    { href: "/dashboard/typography", label: "Typography", icon: Type },
    { href: "/dashboard/buttons", label: "Buttons", icon: Paintbrush },
    { href: "/dashboard/forms", label: "Forms", icon: CheckSquare },
    { href: "/dashboard/cards", label: "Cards", icon: CreditCard },
    { href: "/dashboard/components", label: "Components", icon: ToyBrick },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <SidebarTrigger />
            <h2 className="font-headline text-2xl font-bold text-white group-data-[collapsible=icon]:hidden">Dashboard</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
       <SidebarMenu className="mt-auto">
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Back to Home">
                 <Link href="/">
                    <Home />
                    <span>Back to Home</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
       </SidebarMenu>
    </>
  )
}
