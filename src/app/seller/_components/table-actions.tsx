'use client';

import { Button } from '~/components/ui/button';
import { useRouter } from 'next/navigation';

export function TableProductButtonActions({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();

  const handlePushAction = (id: string, type: string) => {
    switch (type) {
      case 'edit':
        router.push(
          `?edit_product_id=${id}&form_product=true`,
        );
        break;

      case 'delete':
        router.push(`?delete_product_id=${id}`);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Button
        onClick={() => handlePushAction(productId, 'edit')}
        className="w-[70px] bg-[#00AA5B] text-white hover:bg-green-400"
      >
        Edit
      </Button>

      <Button
        variant="outline"
        color="red"
        className="w-[70px] border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
        onClick={() =>
          handlePushAction(productId, 'delete')
        }
      >
        Delete
      </Button>
    </>
  );
}
