import '~/styles/globals.css';
import Navbar from '~/components/navbar';

import { GeistSans } from 'geist/font/sans';
import { TRPCReactProvider } from '~/trpc/react';
import { getServerAuthSession } from '~/server/auth';
import { NavigationMenuBar } from '~/components/navigation-bar';

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

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex w-full flex-col justify-center  sm:min-w-[500px]">
            <Navbar />
            {/* <NavigationMenuBar /> */}
            <div className="mx-auto w-full flex-grow sm:max-w-[1300px]">
              {children}
            </div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
