'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { BANNER_SLIDERS } from '~/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

export function CarouselBanner() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center border border-blue-500 px-20">
      <Carousel
        className="flex h-full w-full items-center justify-center"
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent className="h-full w-screen bg-blue-500">
          {BANNER_SLIDERS.map((_, index) => (
            <CarouselItem
              key={index}
              className="flex h-[300px] w-full items-center justify-center"
            >
              <Image
                src={_.content}
                alt="banner"
                width={700}
                height={300}
                className="rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
