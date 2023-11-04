import api from "../services/client.axios.api";
import { useQuery, useQueryClient } from "react-query";
const useArticles = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const rs = await api.get("/articles");
      return rs.data;
    },
  });
  return {
    articles: data?.articles,
    isLoadingArticles: isLoading,
  };
};

export default useArticles;
