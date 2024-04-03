"use client";

import React from "react";
import Link from "next/link";
import { AtSign } from "lucide-react";

import useResendConfirmation from "@/hooks/useResendConfirmation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ConfirmEmailProps = {
  emailToConfirm: string;
};

function ConfirmEmail({ emailToConfirm }: ConfirmEmailProps) {
  const { mutate, isPending } = useResendConfirmation();

  function handleResendConfirmation() {
    mutate(emailToConfirm);
  }

  return (
    <Card className="w-72 md:w-96 text-center">
      {/* Informative text */}
      <CardHeader>
        <AtSign className="mx-auto h-16 w-16 pb-2" strokeWidth={1.5} />
        <CardTitle>Please verify your email</CardTitle>
        <CardDescription>
          Enter the link which we&apos;ve sent to {emailToConfirm} in order to
          automatically confirm your email address.
        </CardDescription>
      </CardHeader>

      {/* Button actions */}
      <CardContent className="gap-3 justify-center flex">
        <Button
          variant="secondary"
          onClick={handleResendConfirmation}
          isLoading={isPending}
        >
          Resend link
        </Button>

        <Link href="/login" tabIndex={-1}>
          <Button>Login now</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ConfirmEmail;
