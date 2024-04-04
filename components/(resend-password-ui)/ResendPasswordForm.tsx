"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LockKeyhole } from "lucide-react";

import useResendPassword from "@/hooks/useResendPassword";
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
});

function ResendPasswordForm() {
  const { mutate, isPending } = useResendPassword();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData.email);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-8 flex flex-col border border-border border-solid rounded-xl p-4 w-72 md:w-96"
      >
        {/* Header */}
        <div className="text-center text-balance space-y-2">
          <LockKeyhole className="mx-auto h-16 w-16" strokeWidth={1.5} />
          <h1 className="text-3xl font-bold">Trouble logging in?</h1>
          <p className="text-muted-foreground">
            Enter your email and we&apos;ll send you a link to get back into
            your account.
          </p>
        </div>

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
        </div>

        {/* Submit */}
        <Button type="submit" isLoading={isPending}>
          Send password removal
        </Button>
      </form>
    </Form>
  );
}

export default ResendPasswordForm;
