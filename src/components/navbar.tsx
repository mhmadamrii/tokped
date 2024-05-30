'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import HoverCategory from '~/app/(auth)/login/_components/hover-category';

export default function Navbar() {
  const router = useRouter();

  const handlePush = (nav: string): void => {
    router.push(nav);
  };

  return (
    <header className="sticky left-0 right-0 top-0 flex h-[100px] items-center justify-between gap-4 border bg-white px-3">
      <div className="flex gap-2">
        <Link href="/">
          <Image
            width={150}
            height={70}
            src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex w-full gap-2">
        <HoverCategory />
        <Input className="focus-visible:ring-[#00AA5B]" />
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => handlePush('/login')}
          className="rounded-md border border-[#00AA5B] bg-white font-bold text-[#00AA5B] hover:bg-gray-50"
        >
          Masuk
        </Button>
        <Button
          onClick={() => handlePush('/register')}
          className="rounded-md bg-[#00AA5B] font-bold text-white hover:bg-green-500"
        >
          Daftar
        </Button>
      </div>
    </header>
  );
}
