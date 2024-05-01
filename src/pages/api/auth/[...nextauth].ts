import NextAuth from "next-auth"

import GithubProvider from "next-auth/providers/github"
import {SupabaseAdapter} from "@auth/supabase-adapter"

export const authOptions = {
    debug: process.env.NODE_ENV !== "production",
    adapter: SupabaseAdapter({url: process.env.SUPABASE_URL as string, secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string}),
    providers: [GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
           
  })],
}

//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
export default NextAuth(authOptions)
