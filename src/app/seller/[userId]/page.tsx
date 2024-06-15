import dynamic from 'next/dynamic';
import TableProducts from '../_components/table-product';

import { Suspense } from 'react';
import ListCategoryProduct from '../_components/list-category-product';

const FormProduct = dynamic(
  () =>
    import('../_components/form-product').then(
      (mod) => mod.FormProduct,
    ),
  {
    ssr: false,
  },
);

export default function Seller({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00AA5B]">
          Product Management
        </h1>

        <div className='flex space-x-3'>
          <ListCategoryProduct />
          <FormProduct />
        </div>
      </div>
      <Suspense
        fallback={<span>Loading products data</span>}
      >
        <TableProducts />
      </Suspense>
    </div>
  );
}
