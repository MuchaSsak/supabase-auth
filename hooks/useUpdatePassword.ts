import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import updatePassword from "@/services/updatePassword";

function useUpdatePassword() {
  const mutation = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: (password: string) => updatePassword(password),
  });

  const router = useRouter();
  const { error, isSuccess } = mutation;

  // Fetching cases
  useEffect(() => {
    if (error) toast.error(error.message);
    if (isSuccess) {
      toast.success("Successfully updated your credentials!");
      router.push("/login");
    }
  }, [error, isSuccess, router]);

  return mutation;
}

export default useUpdatePassword;
