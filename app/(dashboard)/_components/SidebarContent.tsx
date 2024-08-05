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
    <nav className="flex flex-col py-2 px-2 h-full">
      <ul className="mb-auto">
        {sidebarData.map((item) => {
          const isActive =
            (pathname.includes(item.path) && item.path.length !== 0) ||
            pathname === item.path;
          return (
            <li
              key={item.id}
              className={`group ${
                isActive ? "bg-[#1E00B9]" : "bg-transparent"
              } p-2 rounded-lg hover:bg-[#1E00B9]`}
            >
              <Link
                href={item.path}
                className="flex justify-start items-center gap-2 p-2 px-6 w-full rounded-lg"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={28}
                  height={28}
                  className="group-hover:invert"
                />
                <p className="text-[#04001A] font-medium text-[1.625rem] group-hover:text-white">
                  {item.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-auto mb-6">
        {supportData.map((item) => {
          const isActive =
            (pathname.includes(item.path) && item.path.length !== 0) ||
            pathname === item.path;

          return (
            <li
              key={item.id}
              className={`group ${
                isActive ? "bg-[#1E00B9]" : "bg-transparent"
              } p-2 rounded-lg hover:bg-[#1E00B9]`}
            >
              <Link
                href={item.path}
                className="flex justify-start items-center gap-2 p-2 px-6 w-full rounded-lg"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={28}
                  height={28}
                  className="group-hover:invert"
                />
                <p className="text-[#04001A] font-medium text-[1.625rem] group-hover:text-white">
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
