"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InvestedMissions = {
  mission: string
  assets: string
  investors: number
  holdings: number
  cap: number
  pnl: number
  status: "live" | "closed" | "ready"
}

export const columns: ColumnDef<InvestedMissions>[] = [
  {
    accessorKey: "mission",
    header: "Mission",
  },
  {
    accessorKey: "assets",
    header: "Assets",
  },
  {
    accessorKey: "investors",
    header: "Investors",
  },
  {
    accessorKey: "cap",
    header: "Cap",
  },
  {
    accessorKey: "pnl",
    header: "PnL",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]