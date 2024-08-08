import searchImage from "@/public/search.png";
import Image from "next/image";
const SearchInput = () => {
  return (
    <p className="relative w-[34.4rem] max-w-[34.4rem]">
      <Image
        src={searchImage}
        alt="search input icon"
        className="absolute top-1.5 left-0 translate-y-[50%] translate-x-[50%]"
      />
      <input
        type="text"
        name="search"
        placeholder="search"
        className="w-full bg-[#FFFFFF] border-[#B1B0B8] border-[1px] rounded-2xl py-3 px-4 pl-10 font-medium text-xl text-[#B1B0B8]"
      />
    </p>
  );
};

export default SearchInput;
