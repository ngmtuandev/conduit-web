import api from "../services/client.axios.api";
export const getArticlesAPI = async () => {
  const rs = await api.get("/articles");
  return rs.data;
};
