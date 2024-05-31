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

      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
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
