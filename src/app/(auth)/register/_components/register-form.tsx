'use client';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '~/trpc/react';

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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  // .refine(
  //   (e) => e === 'abcd@fg.com',
  //   'This email is not in our database',
  // ),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  const createUser = api.user.createUser.useMutation({
    onSuccess: () => console.log('success'),
    onError: (err) => console.log('on error sih', { err }),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createUser.mutate({
      username: data.username,
      email: data.email,
    });
  }

  return (
    <div className="flex w-full items-center justify-center border sm:w-auto sm:flex-col">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">
            Daftar Sekarang
          </CardTitle>
          <CardDescription className="text-center">
            Sudah punya akun Tokopedia? <span>Masuk</span>
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
                        className="focus-visible:ring-[#00AA5B]"
                        placeholder="shadcn"
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
                        placeholder="shadcn"
                        className="focus-visible:ring-[#00AA5B]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="mt-4 w-full bg-[#00AA5B] text-white hover:bg-green-500"
                type="submit"
              >
                Daftar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
