'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '~/lib/utils';
import { Button } from './ui/button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';

import {
  CircleUserRound,
  ShoppingCart,
  Store,
} from 'lucide-react';

export function NavigationMenuBar() {
  const session = useSession();
  const router = useRouter();
  console.log('session', session);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="border-r pr-[40px]">
          <NavigationMenuItem className="w-[40px]">
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
          {session.data && (
            <>
              <NavigationMenuItem className="w-[40px]">
                <NavigationMenuTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex h-[400px] w-[360px] flex-col items-center justify-start text-center">
                    <div className="mb-10 ml-[80px] mr-[80px] flex w-full items-center justify-between border px-5 pb-2 pt-2">
                      <h1 className="text-xl font-bold">
                        Notifikasi
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
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
                        Yuk, isi dengan barang-barang
                        impianmu
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

              <NavigationMenuItem className="w-[40px]">
                <NavigationMenuTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
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
                            Beautifully designed components
                            that you can copy and paste into
                            your apps. Accessible.
                            Customizable. Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {session.data && (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="w-[40px]">
              <NavigationMenuTrigger>
                <Store strokeWidth={1.5} />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex h-[100px] w-[350px] flex-col items-center justify-center px-5 py-5 text-center ">
                  <h1 className="mb-2">
                    Kamu belum punya toko
                  </h1>
                  <Button
                    onClick={() =>
                      router.push(
                        `/seller/${session.data.user.id}`,
                      )
                    }
                    className="flex w-full items-center justify-center rounded-md border bg-[#00AA5B] font-bold text-white hover:bg-green-500"
                  >
                    Pergi ke tokomu
                  </Button>
                  <h3>
                    Tokomu hilang?{' '}
                    <Link
                      className="font-bold text-[#00AA5B]"
                      href="report"
                    >
                      Pelajari Selengkapnya
                    </Link>
                  </h3>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-[40px]">
              <NavigationMenuTrigger>
                <CircleUserRound strokeWidth={1.5} />
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
                          Beautifully designed components
                          that you can copy and paste into
                          your apps. Accessible.
                          Customizable. Open Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </>
  );
}
