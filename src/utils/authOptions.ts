import GitHubProvider from "next-auth/providers/github";

import { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add  providers here
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
