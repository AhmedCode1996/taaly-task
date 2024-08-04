"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarData = [
  {
    id: 1,
    title: "Monitoring",
    icon: "/assets/sidebar/monitor.svg",
    path: "/monitoring",
  },
  {
    id: 2,
    title: "Matching",
    icon: "/assets/sidebar/match.svg",
    path: "/matching",
  },
  {
    id: 3,
    title: "Reporting",
    icon: "/assets/sidebar/report.svg",
    path: "/reporting",
  },
  {
    id: 4,
    title: "Organizations",
    icon: "/assets/sidebar/organization.svg",
    path: "/Organizations",
  },
  {
    id: 5,
    title: "Projects",
    icon: "/assets/sidebar/projects.svg",
    path: "/projects",
  },
  {
    id: 6,
    title: "Learning tracks",
    icon: "/assets/sidebar/learnTrack.svg",
    path: "/projects",
  },
];

const supportData = [
  {
    id: 1,
    title: "Settings",
    icon: "/assets/sidebar/settings.svg",
    path: "/Settings",
  },
  {
    id: 2,
    title: "Help",
    icon: "/assets/sidebar/help.svg",
    path: "/Help",
  },
];

const SidebarContent = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col h-dvh p-2">
      <ul className="mb-auto">
        {sidebarData.map((item) => {
          const isActive =
            (pathname.includes(item.path) && item.path.length !== 0) ||
            pathname === item.path;
          return (
            <li
              key={item.id}
              className={`${
                isActive ? "bg-[#1E00B9]" : "bg-transparent"
              } p-2 hover:bg-[#1E00B9] rounded-lg `}
            >
              <Link
                href={item.path}
                className="flex justify-start items-center gap-2 p-2"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
                <p className="text-[#04001A] font-medium text-[1.625rem] hover:text-white w-full">
                  {item.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-auto">
        {supportData.map((item) => {
          const isActive =
            (pathname.includes(item.path) && item.path.length !== 0) ||
            pathname === item.path;

          return (
            <li
              key={item.id}
              className={`${
                isActive ? "bg-[#1E00B9]" : "bg-transparent"
              } p-2 hover:bg-[#1E00B9]  rounded-lg`}
            >
              <Link
                href={item.path}
                className="flex justify-start items-center gap-2"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
                <p className="text-[#04001A] font-medium text-[1.625rem] hover:text-white">
                  {item.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarContent;
