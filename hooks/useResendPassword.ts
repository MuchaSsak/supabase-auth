import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import resendPassword from "@/services/resendPassword";

function useResendPassword() {
  const mutation = useMutation({
    mutationKey: ["resendPassword"],
    mutationFn: (email: string) => resendPassword(email),
  });

  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) toast.success("Successfully resent the link!");
  }, [error, isSuccess]);

  return mutation;
}

export default useResendPassword;
