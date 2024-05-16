import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { SupabaseAdapter } from '@auth/supabase-adapter';
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: SupabaseAdapter({ secret: process.env.SUPABASE_KEY!, url: process.env.SUPABASE_URL! }),
});
