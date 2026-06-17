"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "~/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Introduction",
      url: "#",
      items: [
        {
          title: "Welcome",
          url: "#",
        },
        {
          title: "Goals",
          url: "#",
        },
      ],
    },
    {
      title: "Installation",
      url: "#",
      items: [
        {
          title: "Rom Patcher JS",
          url: "#",
        },
        {
          title: "Hack Dex",
          url: "#",
        },
      ],
    },
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Permanent Repel",
          url: "#",
        },
        {
          title: "Running",
          url: "#",
          isActive: true,
        },
        {
          title: "Level Cap",
          url: "#",
        },
        {
          title: "Better Summary",
          url: "#",
        },
        {
          title: "Physical-Special split",
          url: "#",
        },
        {
          title: "Pocket Tutor",
          url: "#",
        },
        {
          title: "Better Evolutions",
          url: "#",
        },
        {
          title: "Adopt Eggs",
          url: "#",
        },
        {
          title: "Pocket PC",
          url: "#",
        },
        {
          title: "Pocket Heal",
          url: "#",
        },
        {
          title: "Forget HMs",
          url: "#",
        },
        {
          title: "Infinite TMs",
          url: "#",
        },
        {
          title: "Pocket Mart",
          url: "#",
        },
        {
          title: "1$ Items",
          url: "#",
        },
        {
          title: "Pocket Bikes",
          url: "#",
        },
        {
          title: "Auto Blend",
          url: "#",
        },
        {
          title: "Custom Blend",
          url: "#",
        },
        {
          title: "Badge Boost",
          url: "#",
        },
        {
          title: "EV Training",
          url: "#",
        },
        {
          title: "Catch Rate",
          url: "#",
        },
        {
          title: "Fast Eggs",
          url: "#",
        },
        {
          title: "Instant Fishing",
          url: "#",
        },
        {
          title: "Always Feebas",
          url: "#",
        },
        {
          title: "Better Safari",
          url: "#",
        },
        {
          title: "No Fleeing Mons",
          url: "#",
        },
        {
          title: "Instant Text",
          url: "#",
        },
        {
          title: "Music",
          url: "#",
        },
      ],
    },
    {
      title: "Credits",
      url: "#",
      items: [
        {
          title: "pret/pokeemrald",
          url: "#",
        },
        {
          title: "Code",
          url: "#",
        },
        {
          title: "Ideas",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg border-2">
                  <Image
                    className="size-8"
                    src="/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Pokemon Emerald Flow</span>
                  <span className="">v1.0.0-beta</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
