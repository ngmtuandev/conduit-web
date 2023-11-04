import api from "../services/client.axios.api";
import { useQuery, useQueryClient } from "react-query";
const useTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const rs = await api.get("/tags");
      return rs.data;
    },
  });
  return {
    tags: data?.tags,
    isLoadingTags: isLoading,
  };
};

export default useTags;
