'use client';

import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';

export function EditProduct({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();

  const handlePushAction = (id: string) => {
    router.push(`?edit_product_id=${id}`);
  };

  return (
    <>
      <Button
        onClick={() => handlePushAction(productId)}
        className="w-[70px] bg-[#00AA5B] text-white hover:bg-green-400"
      >
        Edit
      </Button>
      <Button
        variant="outline"
        color="red"
        className="w-[70px] border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
      >
        Delete
      </Button>
    </>
  );
}
