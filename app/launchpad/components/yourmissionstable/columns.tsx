"use client";

import { ColumnDef } from "@tanstack/react-table";





// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type YourMissions = {
  mission: string
  assets: string
  holdings: number
  positions: number
  pnl: number
  status: "live" | "closed" | "ready"
}

export const columns: ColumnDef<YourMissions>[] = [
  {
    accessorKey: "mission",
    header: "Mission",
  },
  {
    accessorKey: "assets",
    header: "Assets",
  },
  {
    accessorKey: "holdings",
    header: "Holdings",
  },
  {
    accessorKey: "positions",
    header: "Positions",
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