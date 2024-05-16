import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect('/login');
  }

  return (
    <section className="flex flex-col items-center justify-center">
      Home Page - {data.user.email}
    </section>
  );
}
