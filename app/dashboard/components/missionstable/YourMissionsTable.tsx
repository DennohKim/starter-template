import { DataTable } from "@/components/ui/data-table"

import { YourMissionsTable, columns } from "./columns"

async function getData(): Promise<YourMissionsTable[]> {
  // Fetch data from your API here.
  return [
    {
      missions: "Chizaa",
      holdings: 100,
      positions: 1000,
      pnl: 1.4,
    },
    {
      missions: "Chizaa",
      holdings: 100,
      positions: 1000,
      pnl: 1.4,
    },
    {
      missions: "Chizaa",
      holdings: 100,
      positions: 1000,
      pnl: 1.4,
    },
    {
      missions: "Chizaa",
      holdings: 100,
      positions: 1000,
      pnl: 1.4,
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
