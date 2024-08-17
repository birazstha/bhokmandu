import { useContext } from "react";
import { ThemeContext } from "../../context/theme-cart";
import { Skeleton } from "@mui/material";

export default function SkeletonLoading({ count }) {
  const { theme } = useContext(ThemeContext);

  const skeletonArray = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          className={`shadow-xl rounded-lg mb-5 ${
            !theme && "bg-[#242527] transition-colors duration-500"
          }`}
        >
          <div className="w-full h-64 overflow-hidden rounded-tl-lg cursor-pointer">
            <Skeleton
              variant="rectangular"
              className="w-full h-full object-cover"
              height={300}
            />
          </div>
          <div
            className={`p-4 flex flex-col items-center gap-2 ${
              !theme && "text-white"
            }`}
          >
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
            <Skeleton variant="rectangle" width="30%" height={40} />
          </div>
        </div>
      ))}
      ;
    </>
  );
}
