import Image from 'next/image';
import Link from 'next/link';

import { TProduct } from '~/lib/types';

async function getFakeProducts(): Promise<TProduct[]> {
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
    console.error('Fetch error:', error);
    return [];
  }
}

export default async function FakeProducts() {
  await new Promise((res) => setTimeout(res, 1000));
  const fakeProducts = await getFakeProducts();

  return (
    <div>
      {fakeProducts.map((item) => (
        <Link
          className="border"
          href={`/product/${item.id}`}
          key={item.id}
        >
          <span>{item.title}</span>
          <Image
            src={item.image}
            width={50}
            height={50}
            alt={item.title}
          />
        </Link>
      ))}
    </div>
  );
}
