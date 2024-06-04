import TableProducts from './_components/table-product';
import { Suspense } from 'react';

export default function Seller() {
  return (
    <div>
      <Suspense
        fallback={<span>Loading products data</span>}
      >
        <TableProducts />
      </Suspense>
    </div>
  );
}
