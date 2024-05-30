import Link from "next/link";
import Image from "next/image";

import { getServerAuthSession } from "~/server/auth";

export default async function Landingpage() {
  const session = await getServerAuthSession();

  return (
    <div className="border p-2">
      <header className="flex h-[120px] items-center justify-between">
        <div className="flex gap-2">
          <div>
            <Image
              width={100}
              height={70}
              src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              alt="logo"
            />
          </div>

          <h3>A Marketplace</h3>
        </div>

        <div>
          <span>Kategori</span>
        </div>

        <div className="flex gap-2"></div>
      </header>

      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}

// #00AA5B green
