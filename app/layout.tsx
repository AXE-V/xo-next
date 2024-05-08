import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import clsx from 'clsx';
import { Header } from '@/components/common/header';
import { ControlPanel } from '@/components/common/control-panel/index';
import { SegmentUsers } from '@/components/common/control-panel/components/segment-users';

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen font-sans antialiased relative', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'magma' }}>
          <div className="grid gap-0 grid-rows-[min-content,1fr] h-screen">
            <Header name="Joe Batista" />
            <div className="flex overflow-auto relative mb-6">
              <ControlPanel />
              <main className="size-full bg-background-200">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
