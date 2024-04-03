import { APP_URL } from "@/lib/config";
import { createClient } from "@/services/supabase/client";

async function resendConfirmation(email: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: APP_URL,
      },
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default resendConfirmation;
