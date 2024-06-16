'use client';

import { Spinner } from '~/components/spinner';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { api } from '~/trpc/react';
import { cn } from '~/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProductSchema } from '~/lib/form-schemas';
import { Switch } from '~/components/ui/switch';
import { FormCategory } from './form-category';
import { useEffect, useState } from 'react';
import { Plus, TriangleAlert } from 'lucide-react';
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

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

export function FormProduct({
  productById,
}: {
  productById: ProductById;
}) {
  console.log('fucking prdfklas', productById);
  const searchParams = useSearchParams();
  const session = useSession();
  const pathname = usePathname();
  const utils = api.useUtils();

  const [isOpenCategoryForm, setIsOpenCategoryForm] = useState<boolean>(false); // prettier-ignore
  const [productDataById, setProductDataById] = useState<ProductById | null>(null); // prettier-ignore
  const isOpenForm = searchParams.get('form_product') === 'true'; // prettier-ignore

  // const {
  //   data: productCategories,
  //   refetch: refetchProductCategory,
  // } = api.category.getCategory.useQuery(undefined, {
  //   enabled: true, // false if you need to make it fetch on demand
  // });

  // console.log('edit product with data', productById);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: productDataById?.name ?? '',
      price:
        productDataById?.price ??
        ('' as string | undefined),
      isDiscount: productDataById?.isDiscount ?? false,
      stock: productDataById?.stock ?? '',
      description: productDataById?.description ?? '',
      userId: productDataById?.userId ?? '',
      // categoryId: 0,
      // category: undefined,
    },
  });

  console.log(
    'default values',
    form.formState.defaultValues,
  );

  console.log('setter', productDataById);

  const createProduct =
    api.product.createProduct.useMutation({
      onSuccess: (res) => {
        toast.success('Produk berhasil dibuat');
        form.reset();
        utils.product.getProducts.invalidate();
      },
      onError: (err) => console.log(err),
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
      // category: data.category,
      // images: data.images,
    });
  }

  const handleOpenForm = () => {
    const params = new URLSearchParams(searchParams);

    const isOpenForm =
      params.get('form_product') === 'true';

    if (isOpenForm) {
      params.delete('form_product');
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
    setProductDataById(productById);
  }, [productById]);

  return (
    <>
      <Dialog
        open={isOpenForm}
        onOpenChange={handleOpenForm}
      >
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
              {/* <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <div className="flex gap-3">
                      <Select
                        name={field.name}
                        onValueChange={field.onChange}
                        // @ts-ignore
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="focus:ring-[#00AA5B]">
                            <SelectValue
                              className="focus:ring-[#00AA5B]"
                              placeholder="Select a category"
                            />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              Your product's category
                            </SelectLabel>
                            {productCategories?.map(
                              (item) => (
                                <SelectItem
                                  key={item.id}
                                  value={item.name}
                                >
                                  {item.name}
                                </SelectItem>
                              ),
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Button
                        className="rounded-full bg-[#D4FADD] hover:bg-[#d4fad5]"
                        onClick={() => {
                          router.back();
                          setIsOpenCategoryForm(true);
                        }}
                      >
                        <Plus className="text-[#00AA5B]" />
                      </Button>
                    </div>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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

      <FormCategory
        isOpen={isOpenCategoryForm}
        onCloseModal={() => setIsOpenCategoryForm(false)}
      />
    </>
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
