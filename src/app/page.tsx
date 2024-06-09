import FakeProducts from '~/components/fake-products';

import { Suspense } from 'react';
import { CarouselBanner } from '~/components/carousel-banner';
import { ProductCategories } from '~/components/product-categories';

export default async function Homepage() {
  return (
    <main>
      <CarouselBanner />
      <ProductCategories />
      <Suspense fallback={<span>Loading datas</span>}>
        <FakeProducts />
      </Suspense>
    </main>
  );
}
