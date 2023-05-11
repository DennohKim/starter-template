import { MissionCard } from "./components/MissionCard"


export type Missions = {
  mission_name: string
  loibon: string
  address: string
  tvl: string
  position: "Long" | "Short"
  assets: string
  time_left: string
  holdings: number
  earnings: number
  positions: number
  display_pic: string
}

export const missions: Missions[] = [
  {
    mission_name: "ETH Vault",
    loibon: "Jane Cooper",
    address: "0xce7Ff9D05dD37DD1C86364670c18d92561549954",
    tvl: "Admin",
    position: "Long",
    assets: "ETH",
    time_left: "23:43:03",
    holdings: 234,
    earnings: 43,
    positions: 4,
    display_pic:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    mission_name: "BOLT IN THE RACE",
    loibon: "Jane Cooper",
    address: "0xce7Ff9D05dD37DD1C86364670c18d92561549954",
    tvl: "Admin",
    position: "Long",
    assets: "ETH",
    time_left: "23:43:03",
    holdings: 234,
    earnings: 43,
    positions: 4,
    display_pic:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    mission_name: "KRAMER INVERSE",
    loibon: "Jane Cooper",
    address: "0xce7Ff9D05dD37DD1C86364670c18d92561549954",
    tvl: "Admin",
    position: "Long",
    assets: "ETH",
    time_left: "23:43:03",
    holdings: 234,
    earnings: 43,
    positions: 4,
    display_pic:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    mission_name: "TO THE MOON",
    loibon: "Jane Cooper",
    address: "0xce7Ff9D05dD37DD1C86364670c18d92561549954",
    tvl: "Admin",
    position: "Long",
    assets: "ETH",
    time_left: "23:43:03",
    holdings: 234,
    earnings: 43,
    positions: 4,
    display_pic:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
  {
    mission_name: "GIVE ME YOUR MONEY",
    loibon: "Jane Cooper",
    address: "0xce7Ff9D05dD37DD1C86364670c18d92561549954",
    tvl: "Admin",
    position: "Short",
    assets: "ETH",
    time_left: "23:43:03",
    holdings: 234,
    earnings: 43,
    positions: 4,
    display_pic:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
]

export default function MissionPage() {
  return (
    <div className="min-h-full">
      <div className="py-4">
        <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="rounded-lg px-4 py-8 sm:px-0">
            <div className="h-full rounded-lg">
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {missions.map((mission) => {
                  return (
                    <MissionCard {...mission}/>
                  )
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
