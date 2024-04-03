"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useSignInUser from "@/hooks/useSignInUser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email("Please provide a valid email address.")
    .max(320, { message: "Email must be at max 320 characters long." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(256, { message: "Password must be at max 256 characters long." }),
});

function LoginForm() {
  const { mutate, isPending } = useSignInUser();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 flex flex-col border border-border border-solid rounded-xl p-4 w-72 md:w-96"
      >
        <h1 className="text-3xl text-center font-bold">
          Login to your account
        </h1>

        <div className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.co" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit */}
        <Button type="submit" isLoading={isPending}>
          Log in
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
