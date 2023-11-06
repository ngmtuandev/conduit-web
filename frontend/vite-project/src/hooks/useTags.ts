import { useQuery, useQueryClient } from "react-query";
import { getTagsAPI } from "../services/tags";
const useTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: getTagsAPI,
  });
  return {
    tags: data?.tags,
    isLoadingTags: isLoading,
  };
};

export default useTags;
