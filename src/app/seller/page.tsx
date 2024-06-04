import { FormProduct } from './_components/form-product';
import TableProducts from './_components/table-product';
import { Suspense } from 'react';

export default function Seller() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00AA5B]">
          Product Management
        </h1>
        <FormProduct />
      </div>
      <Suspense
        fallback={<span>Loading products data</span>}
      >
        <TableProducts />
      </Suspense>
    </div>
  );
}
