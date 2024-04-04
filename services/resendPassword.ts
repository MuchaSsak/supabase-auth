import { APP_URL } from "@/lib/config";
import { createClient } from "@/services/supabase/client";

async function resendPassword(email: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${APP_URL}/update-password`,
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default resendPassword;
