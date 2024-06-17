//comment

import { Button } from '~/components/ui/button';
import { Switch } from '~/components/ui/switch';
import { TProduct } from '~/lib/types';
import { api } from '~/trpc/server';
import { Shirt } from 'lucide-react';
import { TableProductButtonActions } from './table-actions';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { NoDataProduct } from '~/components/icons/no-data';

async function getUserProducts(): Promise<TProduct[]> {
  try {
    const res = await fetch(
      'https://fakestoreapi.com/products',
      {
        next: { revalidate: 60 }, // Revalidate the cache every 60 seconds
      },
    );

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function TableProducts({
  userId,
}: {
  userId: string;
}) {
  await new Promise((res, rej) =>
    setTimeout(() => res(true), 1000),
  );

  const userProductsByUserId =
    await api.product.getProductsByUserId({ userId });

  console.log('db products', userProductsByUserId);

  return (
    <>
      {userProductsByUserId.length <= 0 ? (
        <section className="flex h-96 w-full flex-col items-center justify-center">
          <NoDataProduct />
          <h3 className="text-gray-400">
            Tidak ada produk.{' '}
            <span className="cursor-pointer text-[#00AA5B] underline">
              Buat sekarang
            </span>
          </h3>
        </section>
      ) : (
        <Table className="w-full table-auto border-collapse">
          <TableCaption>Lorem ipsum dolor</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Image
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Name
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Price
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Stock
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Discount
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Description
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Category
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userProductsByUserId.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <TableCell className="px-4 py-3">
                  {/* <Image
              src={product.image}
              alt="product placeholder"
              width={64}
              height={64}
              className="rounded-md object-cover"
            /> */}
                  <Shirt strokeWidth={1.5} />
                </TableCell>
                <TableCell className="px-4 py-3 font-medium">
                  {product.name}
                </TableCell>
                <TableCell className="px-4 py-3">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-3">
                  {product.stock}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Switch
                    defaultChecked={product.isDiscount}
                    className="data-[state=checked]:bg-[#00AA5B]"
                    id="airplane-mode"
                  />
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {product.description}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {/* {product.category} */} category
                </TableCell>
                <TableCell className="mt-3 flex h-full flex-col place-items-end justify-between space-x-2 px-4 py-3 sm:flex-row">
                  <TableProductButtonActions
                    productId={product.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
