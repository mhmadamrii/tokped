import dynamic from 'next/dynamic';
import TableProducts from '../_components/table-product';

import { Suspense } from 'react';
import ListCategoryProduct from '../_components/list-category-product';
import { api } from '~/trpc/server';

const FormProduct = dynamic(
  () =>
    import('../_components/form-product').then(
      (mod) => mod.FormProduct,
    ),
  {
    ssr: false,
  },
);

export default async function Seller({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams: { edit_product_id: string };
}) {
  const productById = await api.product.getProductById({
    id: searchParams.edit_product_id ?? '',
  });

  console.log('product by id', productById)
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00AA5B]">
          Product Management
        </h1>

        <div className="flex space-x-3">
          <ListCategoryProduct />
          <FormProduct
            productById={productById}
          />
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
