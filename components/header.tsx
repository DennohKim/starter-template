"use client";
import React from "react";
import { MainNav } from "./main-nav";
import { navigationConfig } from "@/config/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className='container sticky top-0 z-40 w-full'>
      <div className='flex h-16 w-full items-center justify-between py-4'>
        <MainNav items={navigationConfig.mainNav} />
        <div>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
