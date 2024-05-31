import FakeProducts from '~/components/fake-products';
import Link from 'next/link';

import { Suspense } from 'react';
import { CarouselBanner } from '~/components/carousel-banner';
import { getServerAuthSession } from '~/server/auth';

export default async function Homepage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <CarouselBanner />
      <Link href={`/join-seller/${session?.user.id}`}>
        join seller
      </Link>
      <Suspense fallback={<span>Loading datas</span>}>
        <FakeProducts />
      </Suspense>
    </main>
  );
}
