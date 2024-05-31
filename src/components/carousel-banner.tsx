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
    <div className="flex w-[500px] items-center justify-center p-2">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {BANNER_SLIDERS.map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[100px]">
                <Image
                  src={_.content}
                  alt="banner"
                  width={100}
                  height={50}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
