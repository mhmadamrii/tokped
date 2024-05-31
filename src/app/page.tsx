import { Suspense } from 'react';
import { CarouselBanner } from '~/components/carousel-banner';
import { getServerAuthSession } from '~/server/auth';

import FakeProducts from '~/components/fake-products';

export default async function Homepage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <div className="flex w-[500px] items-center justify-center p-2">
        <CarouselBanner />
      </div>

      <div>
        <Suspense fallback={<span>Loading datas</span>}>
          <FakeProducts />
        </Suspense>
      </div>
    </main>
  );
}
