import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import resendConfirmation from "@/services/resendConfirmation";

function useResendConfirmation() {
  const mutation = useMutation({
    mutationKey: ["resendConfirmation"],
    mutationFn: (email: string) => resendConfirmation(email),
  });

  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) toast.success("Successfully resent the link!");
  }, [error, isSuccess]);

  return mutation;
}

export default useResendConfirmation;
