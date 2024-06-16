'use client';

import Link from 'next/link';

import { useSession } from 'next-auth/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoginSchema } from '~/lib/form-schemas';
import { cn } from '~/lib/utils';
import { signIn } from 'next-auth/react';
import {
  useRouter,
  useSearchParams,
} from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { useEffect, useState } from 'react';

export function ButtonGroupNavbar() {
  const session = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] =
    useState<boolean>(false);

  const isFormLogin =
    searchParams.get('form_login_user') == 'true';
  const callbackUrl =
    searchParams.get('callbackUrl') || '/';

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const createUser = {
    isPending: false,
  };

  async function onSubmit(
    data: z.infer<typeof LoginSchema>,
  ) {
    setIsLoading(true);
    const responseSignIn = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/dashboard',
      email: data.email,
      password: data.password,
    });

    if (!responseSignIn?.error) {
      router.push(callbackUrl);
      return;
    }

    setIsLoading(false);
  }

  useEffect(() => {
    return () => setIsLoading(false);
  }, []);

  return (
    <Dialog
      defaultOpen={isFormLogin}
      onOpenChange={() => router.push('/')}
    >
      <DialogTrigger asChild>
        <Button className="rounded-md border border-[#00AA5B] bg-white font-bold text-[#00AA5B] hover:bg-gray-50">
          Masuk
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Masuk Tokopedia</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum, ipsa.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={createUser.isPending}
                      placeholder="john@gmail.com"
                      className="focus-visible:ring-[#00AA5B]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={createUser.isPending}
                      className="focus-visible:ring-[#00AA5B]"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className={cn(
                'mt-4 w-full bg-[#00AA5B] text-gray-200 hover:bg-green-500',
                {
                  'border border-[#00AA5B] bg-white hover:bg-white':
                    isLoading,
                },
              )}
              type="submit"
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 animate-spin fill-[#00AA5B] text-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                'Masuk'
              )}
            </Button>
          </form>
        </Form>
        <div className="flex justify-center">
          <Link
            href={
              session.data
                ? '/api/auth/signout'
                : '/api/auth/signin'
            }
            className="flex gap-2 rounded-full border bg-white/10 px-10 py-3 text-center font-semibold no-underline transition hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              preserveAspectRatio="xMidYMid"
              viewBox="0 -28.5 256 256"
            >
              <path
                fill="#5865F2"
                d="M216.856 16.597A208.502 208.502 0 00164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0079.735 175.3a136.413 136.413 0 01-21.846-10.632 108.636 108.636 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 005.355 4.237 136.07 136.07 0 01-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"
              ></path>
            </svg>
            <span>Login with Discord</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
