"use client"

import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import { navigationConfig } from "@/config/navigation"

import { MainNav } from "./main-nav"

export default function Header() {
  return (
    <header className="z-100 container sticky top-0 w-full bg-background/95 py-2">
      <div className="flex h-16 w-full items-center justify-between py-4">
        <MainNav items={navigationConfig.mainNav} />
        <div>
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}
