import React from "react";
import Image from "next/image";

interface categoryCard {
  item: any;
}
const CategoryCard = (props: categoryCard) => {
  return (
    <div
      key={props.item.id}
      className="mr-[13px] w-[158px] h-[176.39px] text-center cursor-pointer"
    >
      <div className="w-[120px] h-[120px] m-auto bg-white">
        <Image src={props.item.img} alt="" />
      </div>
      <p className="mt-4 text-[20px] font-[400] leading-[26px]">{props.item.name}</p>
    </div>
  );
};

export default CategoryCard;
