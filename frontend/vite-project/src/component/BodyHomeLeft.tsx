import useArticles from "../hooks/useArticles";
import { TArticles } from "../types/articles.type";
import ArticlesItem from "./ArticlesItem";
import { Spinner } from "@material-tailwind/react";

const BodyHomeLeft = () => {
  const { articles, isLoadingArticles } = useArticles();
  // console.log("articles:", articles);
  return (
    <div className="text-[10px] flex-col justify-center items-center h-screen">
      <div className="my-2">
        <div className="w-[100px] flex justify-center items-center text-gray-100 font-semibold text-[14px] border-b-[2px] border-gray-200">
          Global Feed
        </div>
        <div></div>
      </div>
      {isLoadingArticles ? (
        <div className="mt-5 ml-5">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div>
          {articles &&
            articles?.map((item: TArticles) => {
              return (
                <div key={item.id}>
                  <ArticlesItem data={item}></ArticlesItem>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BodyHomeLeft;
