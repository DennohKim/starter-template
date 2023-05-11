
import InvestedMissionsTable from "./components/investedmissiontable/InvestedMissions"
import YourMissionsTable from "./components/missionstable/YourMissionsTable"
import TvlGraph from "./components/tvl/TvlGraph"

const projects = [
  {
    name: "Reserve vaults",
    href: "#",
    value: 29100.38,
  },
  {
    name: "USDC",
    href: "#",
    value: 20438.16,
  },
  {
    name: "LOI",
    href: "#",
    value: 16,
  },
  {
    name: "Token Revenue",
    href: "#",
    value: 291000.0,
  },
  {
    name: "Reserve tied to hedge",
    href: "#",
    value: 123400,
  },
  {
    name: "Total missions",
    href: "#",
    value: 90,
  },
  {
    name: "Number of Loibons",
    href: "#",
    value: 48,
  },
]

export default async function DashboardPage() {
  return (
    <>
      <div className="z-0 min-h-full ">
        <div className="pb-10">
          <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              {/* Replace with your content */}
              <div className="rounded-lg px-4 py-8 sm:px-0">
                <div className="h-full rounded-lg">
                  <div>
                    {/* Values */}
                    <ul
                      role="list"
                      className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                    >
                      {projects.map((project) => (
                        <li
                          key={project.name}
                          className="col-span-1 flex rounded-md"
                        >
                          <div className="flex flex-1  items-center justify-between truncate rounded-md border border-dashboardcard bg-dashboardcard hover:border hover:border-primary hover:bg-dashboardcard-background">
                            <div className="flex-1 truncate px-4 py-2 text-sm">
                              <a
                                href={project.href}
                                className="font-medium text-gray-400"
                              >
                                {project.name}
                              </a>
                              <p className="text-4xl text-white">
                                {project.value}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Graph and table */}

            <div className="min-h-full">
              <div className="rounded-lg pb-8">
                <div className="w-full">
                  {/* Main 3 column grid */}
                  <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5 ">
                    {/* Left column */}
                    <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                      <section aria-labelledby="section-1-title">
                        <div className="rounded-lg bg-table-background">
                          <div className="p-6">
                            <TvlGraph />
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Right column */}
                    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                      <section aria-labelledby="section-2-title">
                        <div className="overflow-hidden rounded-lg bg-table-background">
                          <div className="p-6">
                            {/* @ts-expect-error Server Component */}
                            <YourMissionsTable />
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full">
                <div className="p-4 sm:px-0">
                  <div className="h-96 rounded-lg bg-table-background">
                    {/* @ts-expect-error Server Component */}
                    <InvestedMissionsTable />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
