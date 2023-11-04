import useTags from "../hooks/useTags";
import { Spinner } from "@material-tailwind/react";

const BodyHomeRight = () => {
  const { tags, isLoadingTags } = useTags();
  return (
    <div>
      {isLoadingTags ? (
        <div className="mt-10 ml-40">
          <Spinner className="h-12 w-12 text-white" />
        </div>
      ) : (
        <div className="text-[10px] gap-4 flex flex-wrap shadow-xl p-5 w-[95%] bg-gray-300 bg-opacity-30 rounded-xl mt-4">
          {tags &&
            tags?.map((item: string, index: number) => {
              return (
                <div
                  className="bg-gray-200 p-1 cursor-pointer hover:bg-opacity-90 shadow-xl rounded-xl px-2"
                  key={index}
                >
                  <span className="text-gray-800 text-[14px]">{item}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default BodyHomeRight;
