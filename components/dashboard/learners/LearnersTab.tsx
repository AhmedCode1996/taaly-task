import Link from "next/link";

const LearnersTab = () => {
  return (
    <div className="text-[#B1B0B8] font-medium text-xl flex gap-4 mb-3">
      <p className="border-b-[2px] border-b-transparent hover:text-[#1E00B9] hover:border-b-[2px] hover:border-b-[#1E00B9]">
        <Link href="#">Learners</Link>
      </p>
      <div className="bg-[#B1B0B8] w-[1px] " />
      <p className="capitalize hover:text-[#1E00B9] hover:border-b-[2px] hover:border-b-[#1E00B9] border-b-[2px] border-b-transparent">
        <Link href="#">language buddies</Link>
      </p>
    </div>
  );
};

export default LearnersTab;
