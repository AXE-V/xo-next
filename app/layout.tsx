import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import clsx from 'clsx';
import { Header } from '@/components/common/header';
import { ControlPanel } from '@/components/common/control-panel/index';
import { useRouter } from 'next/router';
import { createClient } from '@/utils/supabase/server';
import { SegmentUsers } from '@/components/common/segments/users/segment-users';
import { InputUsers } from '@/components/common/segments/users/components/input-users';

// export const metadata: Metadata = {
//   title: {
//     default: 'Njs',
//     template: `%s - ${'Njs'}`,
//   },
//   description: 'descr',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen font-sans antialiased relative', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'magma' }}>
          <div className="grid gap-0 grid-rows-[min-content,1fr] h-screen">
            <Header user={user} />
            <div className="flex relative mb-6 overflow-y-auto">
              <ControlPanel />
              <div
                className={clsx(
                  'grid gap-2 size-full rounded-tl-2xl rounded-bl-2xl bg-background-200 py-4 px-4',
                  { 'grid-cols-[min-content,1fr]': user },
                )}>
                {user && <SegmentUsers />}
                <main className="size-full grid place-items-center">{children}</main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
