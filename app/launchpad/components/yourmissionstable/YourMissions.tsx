import { DataTable } from "@/components/ui/data-table"

import { YourMissions, columns } from "./columns"

async function getData(): Promise<YourMissions[]> {
  // Fetch data from your API here.
  return [
    {
      mission: "MBAPPE",
      assets: "ETH",
      holdings: 34,
      positions: 1,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "TRADEWARS",
      assets: "ETH",
      holdings: 34,
      positions: 1,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "DAY TRADER",
      assets: "ETH",
      holdings: 34,
      positions: 1,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "LONG RUN",
      assets: "ETH",
      holdings: 34,
      positions: 1,
      pnl: 1.4,
      status: "live",
    },
  
   
  ]
}

export default async function YourMissionsTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
