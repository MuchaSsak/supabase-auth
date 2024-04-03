"use client";

import React from "react";

import useSignOutUser from "@/hooks/useSignOutUser";
import { Button } from "@/components/ui/button";

function Homepage() {
  const { mutate, isPending } = useSignOutUser();

  return (
    <main className="prose text-center p-24 mx-auto">
      <h1>You&apos;re logged in!</h1>
      <p>
        This route is protected and you get redirected to <code>/login</code>{" "}
        everytime you visit this page without being logged in. On the other
        hand, if you are logged in successfully, <code>/login</code> will
        redirect you here for convenience purposes.
      </p>
      <Button isLoading={isPending} onClick={() => mutate()}>
        Log out
      </Button>
    </main>
  );
}

export default Homepage;
