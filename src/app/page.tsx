import { Suspense } from 'react';
import { CarouselBanner } from '~/components/carousel-banner';
import { getServerAuthSession } from '~/server/auth';

import FakeProducts from '~/components/fake-products';
import Link from 'next/link';

export default async function Homepage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <div className="flex w-[500px] items-center justify-center p-2">
        <CarouselBanner />
      </div>

      <Link href={`/join-seller/${session?.user.id}`}>
        join seller
      </Link>
      <div>
        <Suspense fallback={<span>Loading datas</span>}>
          <FakeProducts />
        </Suspense>
      </div>
    </main>
  );
}
