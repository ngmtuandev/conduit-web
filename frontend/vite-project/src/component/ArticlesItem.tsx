import { TArticles } from "../types/articles.type";
import { AiFillHeart } from "react-icons/ai";

type ArticlesItemType = {
  data: TArticles;
};

const FORMAT_TIME = (dateString: string) => {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `Ngày ${day} tháng ${month} năm ${year}`;

  return formattedDate;
};

const ArticlesItem = ({ data }: ArticlesItemType) => {
  var a = 2;
  return (
    <div className="w-[95%] bg-gray-300 hover:bg-opacity-90 my-2 shadow-xl mb-5 p-4 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col mb-2">
            <span className="font-bold text-[16px] text-gray-700">
              {data?.author?.username}
            </span>
            <span className=" text-gray-600 text-[10px]">
              {FORMAT_TIME(data?.createdAt)}
            </span>
          </div>
          <div className="flex gap-3 w-[50px] h-[30px] justify-center items-center p-2 shadow-md rounded-lg bg-gray-200">
            <p className="font-body text-[14px] text-gray-700">
              {data?.favoritesCount}
            </p>
            <AiFillHeart size={40} color="red"></AiFillHeart>
          </div>
        </div>
      </div>
      <div>
        <h3 className="uppercase text-gray-800 font-bold text-sm">
          {data?.title}
        </h3>
        <span className=" text-[14px] text-gray-700">{data?.description}</span>
      </div>
    </div>
  );
};

export default ArticlesItem;
