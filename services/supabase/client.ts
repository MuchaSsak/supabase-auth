import { SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY } from "@/lib/config";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY);
}
