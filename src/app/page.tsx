import FakeProducts from '~/components/fake-products';
import CarouselBanner from '~/components/CarouselBanner';
import ProductCategorySlider from '~/components/ProductCategorySlider';

import { Suspense } from 'react';

export default async function Homepage() {
  return (
    <main>
      <CarouselBanner />
      <ProductCategorySlider />
      <Suspense fallback={<span>Loading datas</span>}>
        <FakeProducts />
      </Suspense>
    </main>
  );
}
