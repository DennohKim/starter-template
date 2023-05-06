import { NavigationConfig } from "@/types";

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
   
    },
    {
      title: "Missions",
      href: "/missions",
    },
    {
      title: "Launchpad",
      href: "/launchpad",
    },
    {
      title: "Loibons",
      href: "/loibons",
    },
    {
      title: "Stake LOI",
      href: "/stake",
      disabled: true,
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
};
