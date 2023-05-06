"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { MainNavItem } from "@/types";


import Image from "next/image";
import Logo from "../assets/logo.svg";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="mt-4 flex items-center justify-between gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Image src={Logo} height="30" width="30" alt="logo" />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-normal transition-colors hover:text-primary/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-primary"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-4 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <Image src={Logo} height="30" width="30" alt="logo" />
        )}
        <span className="font-bold">
          <Icons.alignLeft/>
        </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    
    </div>
  );
}
