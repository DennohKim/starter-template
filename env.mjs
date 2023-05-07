import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ALCHEMY_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ALCHEMY_ID: z.string().min(1),
  },
  runtimeEnv: {
    ALCHEMY_ID: process.env.ALCHEMY_ID,
    NEXT_PUBLIC_ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  },
})
