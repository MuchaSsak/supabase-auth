import { useQuery } from "@tanstack/react-query";

import getAuthenticatedUser from "@/services/getAuthenticatedUser";

export function useAuthenticatedUser() {
  const query = useQuery({
    queryKey: ["authenticatedUser"],
    queryFn: () => getAuthenticatedUser(),
  });

  return query;
}
