import { NextAuthConfig } from 'next-auth';

import GithubProviders from 'next-auth/providers/github';
import GoogleProviders from 'next-auth/providers/google';

export const authOptions: NextAuthConfig = {
  providers: [
    GithubProviders({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProviders({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};
