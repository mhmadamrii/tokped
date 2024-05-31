import Image from 'next/image';
import Link from 'next/link';

import { getServerAuthSession } from '~/server/auth';

export default async function Login() {
  const session = await getServerAuthSession();
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        width={150}
        height={70}
        src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
        alt="logo"
      />
      <Link
        href={
          session ? '/api/auth/signout' : '/api/auth/signin'
        }
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? 'Sign out' : 'Sign in'}
      </Link>
    </div>
  );
}
