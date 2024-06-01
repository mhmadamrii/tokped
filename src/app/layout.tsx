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
          <div className="flex w-full flex-col justify-center  sm:min-w-[500px]">
            <Navbar />
            <div className="mx-auto max-w-[1300px] flex-grow">
              {children}
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
