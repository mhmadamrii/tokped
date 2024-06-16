'use client';

import Spinner from './Spinner';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { api } from '~/trpc/react';
import { cn } from '~/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProductSchema } from '~/lib/form-schemas';
import { Switch } from '~/components/ui/switch';
import { useEffect, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { Textarea } from '~/components/ui/textarea';

import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from '~/components/ui/dialog';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';

type ProductById = {
  id: string;
  name: string;
  price: number;
  isDiscount: boolean;
  stock: number;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
} | null;

export default function FormDialogProductTransaction({
  productById,
}: {
  productById: ProductById;
}) {
  const searchParams = useSearchParams();
  const session = useSession();
  const pathname = usePathname();
  const utils = api.useUtils();

  const [isOpenCategoryForm, setIsOpenCategoryForm] = useState<boolean>(false); // prettier-ignore
  const isOpenForm = searchParams.get('form_product') === 'true'; // prettier-ignore
  const isOpenEditForm = searchParams.get('edit_product_id'); // prettier-ignore

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: '',
      price: '',
      isDiscount: false,
      stock: '',
      description: '',
      userId: '',
    },
  });

  const createProduct =
    api.product.createProduct.useMutation({
      onSuccess: (res) => {
        toast.success('Produk berhasil dibuat');
        form.reset();
        utils.product.getProducts.invalidate();
      },
      onError: (err) => toast.error('Something went wrong'),
    });

  async function onSubmit(
    data: z.infer<typeof ProductSchema>,
  ) {
    console.log(form.formState.errors);
    createProduct.mutate({
      name: data.name,
      isDiscount: data.isDiscount,
      price: data.price,
      stock: data.stock,
      description: data.description,
      userId: session.data?.user.id as any,
    });
  }

  const handleOpenForm = () => {
    const params = new URLSearchParams(searchParams);

    const isOpenForm =
      params.get('form_product') === 'true';

    if (isOpenForm) {
      params.delete('form_product');
      params.delete('edit_product_id');
    } else {
      params.set('form_product', 'true');
    }

    history.replaceState(
      null,
      '',
      `${pathname}?${params.toString()}`,
    );
  };

  useEffect(() => {
    if (productById) {
      form.setValue('name', productById.name);
      form.setValue('price', String(productById.price));
      form.setValue('stock', String(productById.stock));
      form.setValue('description', productById.description);
    }
  }, [productById]);

  return (
    <Dialog open={isOpenForm} onOpenChange={handleOpenForm}>
      <DialogTrigger asChild onClick={handleOpenForm}>
        <Button variant="outline">Tambah Produk</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeaderFormProduct />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama produk</FormLabel>
                  <FormControl>
                    <Input
                      disabled={createProduct.isPending}
                      placeholder="Kemeja Panjang"
                      className="focus-visible:ring-[#00AA5B]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Buat nama produk yang lebih menarik
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga produk</FormLabel>
                  <FormControl>
                    <Input
                      disabled={createProduct.isPending}
                      className="focus-visible:ring-[#00AA5B]"
                      placeholder="10.000"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tentukan harga produk kamu
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stok produk</FormLabel>
                  <FormControl>
                    <Input
                      disabled={createProduct.isPending}
                      className="focus-visible:ring-[#00AA5B]"
                      placeholder="20"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tentukan stok yang tersedia
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isDiscount"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel>Diskon</FormLabel>
                  <FormControl>
                    <Switch
                      className="data-[state=checked]:bg-[#00AA5B]"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi produk</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Kemeja Putih untuk acara formal"
                      className="focus-visible:ring-[#00AA5B]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Deskripsikan produk kamu
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className={cn(
                'mt-4 w-full bg-[#00AA5B] text-white hover:bg-green-500',
                {
                  'border border-[#00AA5B] bg-white hover:bg-white':
                    createProduct.isPending,
                },
              )}
              type="submit"
            >
              {createProduct.isPending ? (
                <Spinner />
              ) : (
                'Tambah Produk'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const DialogHeaderFormProduct = () => {
  return (
    <DialogHeader>
      <DialogTitle>
        Tambah Produk Baru Dengan Mudah
      </DialogTitle>
      <DialogDescription className="mt-2 flex items-center gap-4 rounded-md bg-[#FDDE55] px-3 py-2 text-black">
        <TriangleAlert />
        You have not category yet, please create at least
        one and you can create brand new product
      </DialogDescription>
    </DialogHeader>
  );
};
