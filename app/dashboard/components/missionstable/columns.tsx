"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type YourMissionsTable = {
  missions: string
  holdings: number
  positions: number
  pnl: number
}

export const columns: ColumnDef<YourMissionsTable>[] = [
  {
    accessorKey: "missions",
    header: "Missions",
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
]
