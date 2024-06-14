'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '~/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';
import { Button } from './ui/button';

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex h-[400px] w-[360px] flex-col items-center justify-start text-center">
              <div className="mb-10 ml-[80px] mr-[80px] flex w-full items-center justify-between border px-5 pb-2 pt-2">
                <h1 className="text-xl font-bold">
                  Keranjang
                </h1>
                <h1 className="font-bold text-[#00AA5B]">
                  Lihat
                </h1>
              </div>

              <div className="flex h-1/2 flex-col items-center justify-center gap-3">
                <Image
                  width={120}
                  height={70}
                  src="	https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png"
                  alt="cart image"
                />

                <h1 className="text-xl font-bold leading-tight">
                  Wah, keranjang belanjamu kosong
                </h1>
                <p className="text-gray-400">
                  Yuk, isi dengan barang-barang impianmu
                </p>
                <Button
                  className="hover:bg-gray-5 rounded-md border border-[#00AA5B] bg-white font-bold text-[#00AA5B] hover:text-[#00AA5B]"
                  variant="outline"
                >
                  Mulai Belanja
                </Button>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[360px]">
              <Image
                width={150}
                height={70}
                src="	https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png"
                alt="cart image"
              />
              <h1 className="text-xl font-bold">
                Wah, keranjang belanjamu kosong
              </h1>
            </div>

            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that
                      you can copy and paste into your apps.
                      Accessible. Customizable. Open Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
