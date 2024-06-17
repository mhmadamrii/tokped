import dynamic from 'next/dynamic';
import TableProducts from '../_components/table-product';
import ListCategoryProduct from '../_components/list-category-product';

import { Suspense } from 'react';
import { api } from '~/trpc/server';

const FormDialogProductTransactiong = dynamic(
  () =>
    import(
      '~/components/FormDialogProductTransaction'
    ).then((mod) => mod.default),
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
  const userId = params.userId;
  const productById = await api.product.getProductById({
    id: searchParams.edit_product_id ?? '',
  });

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00AA5B]">
          Product Management
        </h1>

        <div className="flex space-x-3">
          <ListCategoryProduct />
          <FormDialogProductTransactiong
            productById={productById}
          />
        </div>
      </div>
      <Suspense
        fallback={<span>Loading products data</span>}
      >
        <TableProducts userId={userId} />
      </Suspense>
    </div>
  );
}
