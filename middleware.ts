import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { UNPROTECTED_ROUTES } from "@/lib/config";
import { createClient } from "@/services/supabase/server";
import { updateSession } from "@/services/supabase/middleware";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createClient();

  await updateSession(req);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  /*
   Redirect the user to /login if:
      1. supabase.auth.getUser() returned null (NOT logged in)
      2. NOT already in an unprotected route (e.g. /register, /login etc.)
  */
  if (!user && !UNPROTECTED_ROUTES.includes(pathname))
    return NextResponse.redirect(new URL("/login", req.url));

  /*
   Redirect the user to / if:
      1. supabase.auth.getUser() returned the user (IS logged in)
      2. Is in the /login route
  */
  if (user && pathname === "/login")
    return NextResponse.redirect(new URL("/", req.url));

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
