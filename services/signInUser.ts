import { createClient } from "@/services/supabase/client";

async function signInUser({ email, password }: UserLoginInfo) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signInUser;
