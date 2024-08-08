import Image from "next/image";

const LearnersHeader = () => {
  return (
    <div className="flex-1 flex items-center relative mb-2">
      <Image
        className="cursor-pointer absolute top-0 left-1 translate-x-[50%] translate-y-[45%]"
        src="/assets/learners/filters.svg"
        alt="filters icon"
        width={28}
        height={28}
      />
      <div className="absolute w-[1px] bg-[#B1B0B8] top-0 bottom-0 left-[5.5%]" />
      <Image
        className="cursor-pointer absolute top-0.5 left-[7%] translate-y-[50%]"
        src="/assets/learners/search.svg"
        alt="search icon"
        width={24}
        height={24}
      />
      <input
        type="text"
        placeholder="Search by Name, Level, etc"
        className="w-full bg-white text-[#B1B0B8] font-medium text-xl focus:outline-none border-[1px] border-[#B1B0B8] xl:pl-[10%] lg:pl-32 md:pl-28 sm:pl-24 p-3 rounded-3xl"
      />
    </div>
  );
};

export default LearnersHeader;
