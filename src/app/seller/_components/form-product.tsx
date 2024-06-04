'use client';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  useRouter,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

export function FormProduct() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpenForm =
    searchParams.get('form_product') == 'true';

  const handleOpenForm = () => {
    if (isOpenForm) {
      router.push('?form_product=true');
    } else {
      router.push('/seller');
    }
    console.log(pathname);
  };

  return (
    <Dialog
      defaultOpen={isOpenForm}
      onOpenChange={handleOpenForm}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Add product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new product</DialogTitle>
          <DialogDescription>
            Let's ship your product together and become a
            richman
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
