const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
]

export default function LoibonDetails() {
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="">
              {/* Replace with your content */}
              <div className="rounded-lg border-2 border-dashed border-gray-200 px-4 py-8 sm:px-0">
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
                          className="col-span-1 flex rounded-md shadow-sm"
                        >
                          <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
                            <div className="flex-1 truncate px-4 py-2 text-sm">
                              <a
                                href={project.href}
                                className="font-medium text-gray-900 hover:text-gray-600"
                              >
                                {project.name}
                              </a>
                              <p className="text-gray-500">{project.members}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

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
                            <div className="p-6">{/* Your content */}</div>
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

            <div>
              <div className="w-full">
                {/* Replace with your content */}
                <div className="p-4 sm:px-0">
                  <div className="h-96 rounded-lg border-2 border-dashed border-gray-200" />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
