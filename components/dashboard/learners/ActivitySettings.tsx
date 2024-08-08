import Image from "next/image";

const ActivitySettings = () => {
  return (
    <div className="bg-[#1E00B9] text-white rounded-2xl p-9 flex flex-col gap-4 text-center items-center">
      <Image
        src="/assets/statistics/settings.svg"
        alt="settings icon"
        width={40}
        height={42}
      />
      <p className="capitalize font-semibold text-[1.625rem]">
        manage
        <br />
        organizations
      </p>
    </div>
  );
};

export default ActivitySettings;
