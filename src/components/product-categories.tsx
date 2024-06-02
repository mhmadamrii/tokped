import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '~/components/ui/card';
import { TProduct } from '~/lib/types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs';

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

export async function ProductCategories() {
  const fakeProducts = await getFakeProducts();
  // console.log(fakeProducts);

  return (
    <div className="mx-4 my-4 flex justify-between gap-5 rounded-md border p-5 px-5">
      <div className="flex w-1/2 flex-col gap-3">
        <h1 className="text-xl font-bold">
          Kategori Pilihan
        </h1>

        <Carousel>
          <CarouselContent>
            {fakeProducts.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="shadow-sm">
                  <CardContent className="flex aspect-square h-full flex-col items-center justify-center">
                    <div className="flex h-full w-full flex-grow flex-col sm:p-6">
                      <Link
                        href={`/product/${_.id}`}
                        key={_.id}
                        className="flex h-full flex-col items-center justify-center"
                      >
                        <Image
                          src={_.image}
                          width={50}
                          height={50}
                          alt={_.title}
                        />
                      </Link>
                    </div>
                    <span>{_.category}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[5px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[5px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>

      <div className="flex w-1/2 flex-col gap-3">
        <h1 className="text-xl font-bold">
          Top Up & Tagihan
        </h1>
        <Tabs
          defaultValue="pulsa"
          className="h-full w-full rounded-md border"
        >
          <TabsList className="grid w-full grid-cols-3 bg-white">
            <TabsTrigger
              value="pulsa"
              className="rounded-none border-b-4 border-b-white data-[state=active]:border-b-4 data-[state=active]:border-b-[#00AA5B] data-[state=active]:text-[#00AA5B]"
            >
              Pulsa
            </TabsTrigger>
            <TabsTrigger
              value="paket"
              className="rounded-none border-b-4 border-b-white data-[state=active]:border-b-4 data-[state=active]:border-b-[#00AA5B] data-[state=active]:text-[#00AA5B]"
            >
              Paket Data
            </TabsTrigger>
            <TabsTrigger
              value="product"
              className="rounded-none border-b-4 border-b-white data-[state=active]:border-b-4 data-[state=active]:border-b-[#00AA5B] data-[state=active]:text-[#00AA5B]"
            >
              Products
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pulsa">
            category 1
          </TabsContent>
          <TabsContent value="paket">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellat fuga ratione
            reiciendis id blanditiis excepturi debitis nulla
            eius, ut distinctio voluptates maiores alias
            inventore perferendis tempora animi quas? Totam,
            repellat.
          </TabsContent>
          <TabsContent value="product">
            category2
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
