import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import signUpUser from "@/services/signUpUser";
import { useEffect } from "react";

function useSignUpUser(
  setShouldConfirmEmail: React.Dispatch<React.SetStateAction<boolean>>
) {
  const mutation = useMutation({
    mutationKey: ["signUpUser"],
    mutationFn: (formData: UserRegisterInfo) => signUpUser(formData),
  });

  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) setShouldConfirmEmail(true);
  }, [isSuccess, error, setShouldConfirmEmail]);

  return mutation;
}

export default useSignUpUser;
