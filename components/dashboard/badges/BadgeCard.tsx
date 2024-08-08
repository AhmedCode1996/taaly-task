import Image from "next/image";
import React from "react";
interface IPropsTypes {
  title: string;
  total: number;
  icon: string;
  id?: number;
}

const BadgeCard = ({ title, total, icon }: IPropsTypes) => {
  return (
    <article className="bg-[#1E00B9] rounded-2xl lg:p-2 flex gap-4 items-center text-white pl-6 cursor-pointer">
      <div className="bg-white flex justify-center items-center p-2 w-[56px] h-[56px] rounded-[50%]">
        <Image
          className="lg:w-5 lg:h-5"
          src={icon}
          alt={title}
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-xl max-w-[70%] leading-7">{title}</p>
        <span className="font-bold text-[1.625rem] self-start">{total}</span>
      </div>
    </article>
  );
};

export default BadgeCard;
