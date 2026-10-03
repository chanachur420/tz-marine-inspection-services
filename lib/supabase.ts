import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  return createBrowserClient(url, anonKey);
}

let browserClient: SupabaseClient | undefined;

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    if (!browserClient) {
      browserClient = createClient();
    }
    const value = Reflect.get(browserClient, prop, receiver);
    return typeof value === "function" ? value.bind(browserClient) : value;
  },
});
