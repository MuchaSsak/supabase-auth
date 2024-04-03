import { createClient } from "@/services/supabase/client";

async function signUpUser({ email, username, password }: UserRegisterInfo) {
  const supabase = createClient();
  username = username.toLowerCase();

  // 1) Check if username and email is unique (mandatory)
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .or(`username.eq.${username},email.eq.${email}`);

    if (error) throw error;
    if (data.length > 0) throw new Error("Username or email is already taken!");
  } catch (err) {
    console.error(err);
    throw err;
  }

  // 2) Sign up account
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      // Store the username in user's raw metadata
      options: {
        data: {
          username,
        },
      },
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default signUpUser;
