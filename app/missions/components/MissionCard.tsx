import React, { FC } from "react"
import Link from "next/link"

import { shortenAddress } from "@/lib/shortenAddress"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { Missions } from "../page"

export const MissionCard: FC<Missions> = ({
  mission_name,
  loibon,
  display_pic,
  address,
  time_left,
  position,
  positions,
  assets,
  holdings,
  earnings,
}) => {
  return (
    <Link key={loibon} href={`/missions/1`}>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex ">
              <div className="pr-2">
                <img
                  className="h-12 w-12 rounded-full"
                  src={display_pic}
                  alt="display"
                />
              </div>
              <div>
                <p className="text-sm font-light">Loibon</p>
                <p className="font-bold">{shortenAddress(address)}</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-primary">{time_left}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 py-2">
              <div>

                {position === "Long" ? (
                  <p className="rounded-md border border-[#23E33E] bg-[#23E33E]/20 px-2 py-1 text-sm text-[#23E33E]">
                    Long
                  </p>
                ) : (
                  <p className="rounded-md border border-[#F20000] bg-[#F20000]/20 px-2 py-1 text-sm text-[#F20000]">Short</p>
                )}
              </div>
              <div>{assets}</div>
            </div>
            <div className="text-xl font-bold">{mission_name}</div>
            <Separator className="my-3" />
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-light">Holdings</p>
                <p className="font-bold">$ {holdings}</p>
              </div>
              <div>
                <p className="text-sm font-light">Earnings</p>
                <p className="font-bold">$ {earnings}</p>
              </div>
              <div>
                <p className="text-sm font-light">positions</p>
                <p className="font-bold">$ {positions}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
