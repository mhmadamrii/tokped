'use client';

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
import { useState } from 'react';
import { Plus, TriangleAlert } from 'lucide-react';

import {
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

export function FormProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpenCategoryForm, setIsOpenCategoryForm] =
    useState<boolean>(false);

  const createProduct =
    api.product.createProduct.useMutation({
      onSuccess: (res) => console.log(res),
    });

  const {
    data: productCategories,
    refetch: refetchProductCategory,
  } = api.category.getCategory.useQuery(undefined, {
    enabled: true, // false if you need to make it fetch on demand
  });

  const isOpenForm =
    searchParams.get('form_product') === 'true';

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: '',
      price: 0,
      isDiscount: false,
      stock: 0,
      description: '',
      category: '',
    },
  });

  async function onSubmit(
    data: z.infer<typeof ProductSchema>,
  ) {
    createProduct.mutate({
      name: data.name,
      isDiscount: data.isDiscount,
      price: data.price,
      stock: data.stock,
      description: data.description,
      category: 'askfdl',
      images: data.images,
    });
  }

  const handleOpenForm = () => {
    if (isOpenForm) {
      router.push('/seller');
    } else {
      router.push('?form_product=true');
    }
  };

  return (
    <>
      <Dialog
        open={isOpenForm}
        onOpenChange={handleOpenForm}
      >
        <DialogTrigger asChild onClick={handleOpenForm}>
          <Button variant="outline">Add product</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription className="mt-2 flex items-center gap-4 rounded-md bg-[#FDDE55] px-3 py-2 text-black">
              <TriangleAlert />
              You have not category yet, please create at
              least one and you can create brand new product
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createProduct.isPending}
                        placeholder="john@gmail.com"
                        className="focus-visible:ring-[#00AA5B]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Make an appropriate name
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
                    <FormLabel>Product price</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createProduct.isPending}
                        className="focus-visible:ring-[#00AA5B]"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Make a suitable price
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <div className="flex gap-3">
                      <Select
                        onValueChange={field.onChange}
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
                            <SelectLabel
                              onClick={() =>
                                refetchProductCategory()
                              }
                            >
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
                            <SelectItem value="apple">
                              Apple
                            </SelectItem>
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
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product stock</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createProduct.isPending}
                        className="focus-visible:ring-[#00AA5B]"
                        placeholder="20"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your product stock
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
                    <FormLabel>Discount</FormLabel>
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

              <Button
                className={cn(
                  'mt-4 w-full bg-[#00AA5B] text-gray-200 hover:bg-green-500',
                  {
                    'border border-[#00AA5B] bg-white':
                      createProduct.isPending,
                  },
                )}
                type="submit"
              >
                {createProduct.isPending ? (
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 animate-spin fill-[#00AA5B] text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  'Add Product'
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
