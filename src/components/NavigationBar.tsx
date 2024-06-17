'use client';

import Link from 'next/link';
import Image from 'next/image';
import HoverCategory from '~/app/(auth)/login/_components/hover-category';
import dynamic from 'next/dynamic';
import InputCategory from './InputCategory';
import NavigationMenuBar from './NavigationMenuUser';

import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ButtonGroupNavbar = dynamic(
  () =>
    import('./ButtonGroupNavbar').then(
      (mod) => mod.ButtonGroupNavbar,
    ),
  {
    ssr: false,
  },
);

export default function NavigationBar() {
  const router = useRouter();
  const session = useSession();
  const pathname = usePathname();

  const handleLogOut = async () => {
    await signOut();
    router.push('/');
  };

  if (pathname == '/register')
    return (
      <header className="absolute left-0 right-0 top-0 flex w-full items-center justify-center px-3 py-3">
        <Link href="/">
          <Image
            width={150}
            height={70}
            src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="logo"
          />
        </Link>
      </header>
    );

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-[90px] items-center justify-between gap-4 border bg-white px-14">
      <div className="flex gap-2">
        <Link href="/">
          <Image
            width={250}
            height={100}
            src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex w-full gap-2">
        <HoverCategory />
        <InputCategory />
      </div>
      <NavigationMenuBar />
      {session.data ? (
        <div className="flex items-center gap-3">
          <Button
            className="flex items-center gap-2"
            onClick={handleLogOut}
          >
            <LogOut strokeWidth={1.5} />
            Sign out
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <ButtonGroupNavbar />
          <Link
            href="/register"
            className="flex w-[80px] items-center justify-center rounded-md bg-[#00AA5B] font-bold text-white hover:bg-green-500"
          >
            Daftar
          </Link>
        </div>
      )}
    </header>
  );
}
