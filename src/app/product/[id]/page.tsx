import Image from 'next/image';
import Link from 'next/link';

import { TProduct } from '~/lib/types';

async function getFakeProductById(
  id: string,
): Promise<TProduct | undefined> {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`,
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
    return;
  }
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const fakeProduct = await getFakeProductById(params.id);

  if (!fakeProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link className="block" href="/">
        Homepage
      </Link>
      <span>{fakeProduct.title}</span>
      <Image
        src={fakeProduct.image}
        width={50}
        height={50}
        alt={fakeProduct.title}
      />
    </div>
  );
}
