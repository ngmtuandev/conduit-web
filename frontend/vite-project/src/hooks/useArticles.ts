import { useQuery, useQueryClient } from "react-query";
import { getArticlesAPI } from "../services/articles";
const useArticles = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticlesAPI(),
  });
  return {
    articles: data?.articles,
    isLoadingArticles: isLoading,
  };
};

export default useArticles;
