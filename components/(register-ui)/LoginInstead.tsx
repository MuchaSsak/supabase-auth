import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function LoginInstead() {
  return (
    <div className="border border-border border-solid rounded-xl p-4 text-sm w-72 md:w-96 text-center">
      <span>Already have an account?</span>
      <Link href="/login" tabIndex={-1}>
        <Button variant="link" className="px-2 h-min">
          Login here
        </Button>
      </Link>
    </div>
  );
}

export default LoginInstead;
