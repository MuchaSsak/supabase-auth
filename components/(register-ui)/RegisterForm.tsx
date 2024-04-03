"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useSignUpUser from "@/hooks/useSignUpUser";
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
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(25, { message: "Username must be at max 25 characters long." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(256, { message: "Password must be at max 256 characters long." }),
});

type RegisterFormProps = {
  setShouldConfirmEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setEmailToConfirm: React.Dispatch<React.SetStateAction<string>>;
};

function RegisterForm({
  setShouldConfirmEmail,
  setEmailToConfirm,
}: RegisterFormProps) {
  const { mutate, isPending } = useSignUpUser(setShouldConfirmEmail);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData);
    setEmailToConfirm(formData.email);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 flex flex-col border border-border border-solid rounded-xl p-4 w-72 md:w-96"
      >
        <h1 className="text-3xl text-center font-bold">Register an account</h1>

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

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
          Register
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
