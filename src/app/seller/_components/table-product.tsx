import Image from 'next/image';

import { Button } from '~/components/ui/button';
import { Switch } from '~/components/ui/switch';
import { FormProduct } from './form-product';
import { TProduct } from '~/lib/types';

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

export default async function TableProducts() {
  await new Promise((res, rej) =>
    setTimeout(() => res(true), 1000),
  );
  const userProducts = await getUserProducts();
  console.log(userProducts);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#00AA5B]">
          Product Management
        </h1>
        <FormProduct />
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full table-auto border-collapse">
          <TableCaption>All your products</TableCaption>
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
            {userProducts.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <TableCell className="px-4 py-3">
                  <Image
                    src="/placeholder.svg"
                    alt={product.image}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="px-4 py-3 font-medium">
                  {product.title}
                </TableCell>
                <TableCell className="px-4 py-3">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-3">
                  {product.id}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Switch
                    className="data-[state=checked]:bg-[#00AA5B]"
                    id="airplane-mode"
                  />
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {product.description}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  {product.category}
                </TableCell>
                <TableCell className="mt-3 flex h-full flex-col place-items-end justify-between space-x-2 px-4 py-3 sm:flex-row">
                  <Button
                    className="bg-[#00AA5B] text-white hover:bg-green-400"
                    size="default"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    color="red"
                    className="border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
