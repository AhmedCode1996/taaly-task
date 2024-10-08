import Image from "next/image";
import Link from "next/link";

const learners = [
  {
    name: "Haitham Badran",
    level: "Medium B2",
    program: "Adults",
    organization: "Amsterdam",
    rating: "7/10",
    hoursSpent: "7.5",
    imageUrl: "/assets/learners/Hi.png",
  },
  {
    name: "Hebah Abdullah",
    level: "Medium B2",
    program: "Adults",
    organization: "Amsterdam",
    rating: "6/10",
    hoursSpent: "7.5",
    imageUrl: "/assets/learners/Happy.png",
  },
  {
    name: "Miles Esther",
    level: "Medium B2",
    program: "Adults",
    organization: "Amsterdam",
    rating: "9/10",
    hoursSpent: "7.5",
    imageUrl: "/assets/learners/Smile.png",
  },
];

const LearnersTable = () => {
  return (
    <table className="w-full bg-white rounded-lg">
      <thead className="bg-white text-left">
        <tr className="text-[#B1B0B8] font-normal text-base">
          <th className="py-2 px-4 pl-12">Name</th>
          <th className="py-2 px-4">Level</th>
          <th className="py-2 px-4">Program</th>
          <th className="py-2 px-4">Organization</th>
          <th className="py-2 px-4">Rating</th>
          <th className="py-2 px-4">Hours Spent</th>
          <th className="py-2 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {learners.map((learner, index) => (
          <tr
            key={index}
            className="border-b last:border-none text-[#04001A] font-medium text-base"
          >
            <td className="flex items-center py-2 px-4">
              <Image
                src={learner.imageUrl}
                alt={`${learner.name} avatar`}
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="ml-2">{learner.name}</span>
            </td>
            <td className="px-4">{learner.program}</td>
            <td className="px-4">{learner.organization}</td>
            <td className="px-4">{learner.level}</td>
            <td className="px-4">{learner.rating}</td>
            <td className="px-4">
              <div className="relative w-16 h-16">
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#B1B0B8"
                    stroke-width="2"
                    fill="transparent"
                  />
                </svg>
                <svg className="absolute inset-0 w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#04001A"
                    stroke-width="3.8"
                    stroke-dasharray="100"
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#04001A]">
                  <span className="font-bold text-base leading-5">
                    {learner.hoursSpent}
                  </span>
                  <span className="font-medium text-sm leading-5">/10h</span>
                </div>
              </div>
            </td>
            <td className="px-4 text-[#1E00B9] cursor-pointer">
              <Link href="#">View →</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LearnersTable;
