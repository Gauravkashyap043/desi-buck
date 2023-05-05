import HorizontalScrollList from "@/src/components/HorizontalScrollList/HorizontalScrollList";
import React from "react";
import { cardFavItems } from "@/utils/data";
const page: React.FC = () => {
  console.log("--cardFavItems---", cardFavItems);
  return (
    // <div className='border w-[40%] m-auto overflow-x-hidden'>
    <HorizontalScrollList data={cardFavItems} />
    // </div>
  );
};

export default page;
