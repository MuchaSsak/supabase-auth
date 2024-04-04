"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useUpdatePassword from "@/hooks/useUpdatePassword";
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

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(256, { message: "Password must be at max 256 characters long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

function UpdatePasswordForm() {
  const { mutate, isPending } = useUpdatePassword();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData.password);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 flex flex-col border border-border border-solid rounded-xl p-4 w-72 md:w-96"
      >
        {/* Header */}
        <div className="text-center text-balance space-y-2">
          <h1 className="text-3xl text-center font-bold">
            Update your credentials
          </h1>
          <p className="text-muted-foreground">
            Please fill in your new password and keep it safe. You&apos;ll get
            automatically logged in after submitting.
          </p>
        </div>

        <div className="space-y-4">
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

          {/* Confirm password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
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
          Update password
        </Button>
      </form>
    </Form>
  );
}

export default UpdatePasswordForm;
