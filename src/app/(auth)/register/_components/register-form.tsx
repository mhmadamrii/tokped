'use client';

import Link from 'next/link';

import { useSession } from 'next-auth/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '~/trpc/react';
import { toast } from 'sonner';
import { cn } from '~/lib/utils';
import { RegisterSchema } from '~/lib/form-schemas';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      password: '',
      username: '',
      email: '',
    },
  });

  const createUser = api.user.createUser.useMutation({
    onSuccess: () => {
      form.reset();
      toast.success('User has been created');
    },
    onError: (err) => {
      console.log('[ERROR_MUTATING_DATA]', { err }),
        toast.error('Something went wrong');
    },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    createUser.mutate({
      password: data.password,
      username: data.username,
      email: data.email,
    });
  }

  return (
    <div className="flex w-full items-center justify-center sm:w-auto sm:flex-col">
      <Card className="w-full sm:w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">
            Daftar Sekarang
          </CardTitle>
          <CardDescription className="text-center">
            Sudah punya akun Tokopedia?{' '}
            <Link
              href="/login"
              className="font-bold text-[#00AA5B]"
            >
              Masuk
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createUser.isPending}
                        className="focus-visible:ring-[#00AA5B]"
                        placeholder="John Doe"
                        type="text"
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
                        type="email"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={createUser.isPending}
                        className="focus-visible:ring-[#00AA5B]"
                        placeholder="John Doe"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter your personal password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className={cn(
                  'mt-4 w-full bg-[#00AA5B] text-white hover:bg-green-500',
                  {
                    'border border-[#00AA5B] bg-white':
                      createUser.isPending,
                  },
                )}
                type="submit"
              >
                {createUser.isPending ? (
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 animate-spin fill-[#00AA5B] text-gray-300"
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
                  'Daftar'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
