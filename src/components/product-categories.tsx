import * as React from 'react';

import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export function ProductCategories() {
  return (
    <div className="flex justify-between px-5">
      <div>
        <h1 className="text-xl font-bold">
          Kategori Pilihan
        </h1>
        <Carousel className="w-[400px] border border-red-500">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="w-[20px]"
              >
                <div className="">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi, modi minima. Quasi exercitationem
        dignissimos perspiciatis nemo possimus fugiat error
        minima placeat asperiores obcaecati! Cum dolor quasi
        voluptas repellat impedit saepe!
      </div>
    </div>
  );
}
