import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';

import { TRPCReactProvider } from '~/trpc/react';
import { getServerAuthSession } from '~/server/auth';
import Navbar from '~/components/navbar';

export const metadata = {
  title: 'Tokopedia',
  description: 'Situs jual beli online terpercaya',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  console.log('session user', session);
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Navbar />
          <div className="min-w-[500px] border border-red-500">
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
