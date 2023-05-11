import YourMissionsTable from "./components/yourmissionstable/YourMissions"


export default function LaunchpadPage() {
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              {/* Graph and table */}

              <div className="min-h-full">
                <div className="mt-10 rounded-lg border-2 border-dashed border-gray-200 pb-8">
                  <div className="w-full">
                    {/* Main 3 column grid */}
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5 ">
                      {/* Left column */}
                      <div className="grid grid-cols-1 gap-4 lg:col-span-3">
                        <section aria-labelledby="section-1-title">
                          <div className="overflow-hidden rounded-lg bg-white shadow">
                            <div className="p-6">
                              {/* @ts-expect-error Server Component */}

                              <YourMissionsTable />
                            </div>
                          </div>
                        </section>
                      </div>

                      {/* Right column */}
                      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                        <section aria-labelledby="section-2-title">
                          <div className="overflow-hidden rounded-lg bg-white shadow">
                            <div className="p-6">{/* Your content */}</div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
