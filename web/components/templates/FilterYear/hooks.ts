import { useApiClient } from "@/lib/api/apiClient";

export const useHooks =(year: string) => {
    const { response, loading, error } = useApiClient({
      method: "GET",
      url: `/tasks/query?year=${year}`,
    });

    return { data: response, loading, error };
  };
