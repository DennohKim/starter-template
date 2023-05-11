import { DataTable } from "@/components/ui/data-table"
import { InvestedMissions, columns } from "./columns"


async function getData(): Promise<InvestedMissions[]> {
  // Fetch data from your API here.
  return [
    {
      mission: "Chizaa",
      assets: "ETH",
      investors: 10,
      holdings: 100,
      cap: 1000,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "Chizaa",
      assets: "ETH",
      investors: 10,
      holdings: 100,
      cap: 1000,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "Chizaa",
      assets: "ETH",
      investors: 10,
      holdings: 100,
      cap: 1000,
      pnl: 1.4,
      status: "live",
    },
    {
      mission: "Chizaa",
      assets: "ETH",
      investors: 10,
      holdings: 100,
      cap: 1000,
      pnl: 1.4,
      status: "live",
    },
  ]
}

export default async function InvestedMissionsTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

