import Link from 'next/link';
import Image from 'next/image';
import HoverCategory from '~/app/(auth)/login/_components/hover-category';

import { headers } from 'next/headers';
import { Cart } from './cart';
import { InputCategory } from './input-category';
import { ButtonLogin } from './buton-login';
import { getServerAuthSession } from '~/server/auth';

export default async function Navbar() {
  const session = await getServerAuthSession();
  const headersList = headers();

  if (headersList.get('x-pathname') == '/register')
    return (
      <div className="absolute left-0 right-0 top-0 flex w-full items-center justify-center px-3 py-3">
        <Image
          width={150}
          height={70}
          src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
          alt="logo"
        />
      </div>
    );

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-[100px] items-center justify-between gap-4 border border-red-500 bg-white px-3">
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
        <InputCategory />
      </div>

      <div className="cursor-pointer">
        <Cart />
      </div>

      {session ? (
        <Link href="/login">sign out</Link>
      ) : (
        <div className="flex gap-2">
          <ButtonLogin />
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
