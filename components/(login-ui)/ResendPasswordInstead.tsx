import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function ResendPasswordInstead() {
  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="flex items-center gap-4 text-sm">
        <div className="bg-muted-foreground h-[1px] flex-grow" />
        <span className="text-muted-foreground">OR</span>
        <div className="bg-muted-foreground h-[1px] flex-grow" />
      </div>

      <Link href="/resend-password" tabIndex={-1}>
        <Button variant="link" size="sm">
          Forgot password?
        </Button>
      </Link>
    </div>
  );
}

export default ResendPasswordInstead;
