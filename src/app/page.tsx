import FakeProducts from '~/components/fake-products';
import Link from 'next/link';

import { Suspense } from 'react';
import { CarouselBanner } from '~/components/carousel-banner';
import { getServerAuthSession } from '~/server/auth';
import { ProductCategories } from '~/components/product-categories';

export default async function Homepage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <CarouselBanner />
      {/* <Link href={`/join-seller/${session?.user.id}`}>
        join seller
      </Link> */}
      <ProductCategories />
      <Suspense fallback={<span>Loading datas</span>}>
        <FakeProducts />
      </Suspense>
    </main>
  );
}
