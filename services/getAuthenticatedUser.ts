import { createClient } from "@/services/supabase/client";

async function getAuthenticatedUser() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getAuthenticatedUser;
