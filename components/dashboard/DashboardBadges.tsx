import React from "react";
import BadgeCard from "./BadgeCard";

const contentBadgesData = [
  {
    id: 1,
    title: "Total Learners",
    total: 12,
    icon: "/assets/badges/learners.svg",
  },
  {
    id: 2,
    title: "Total Language Buddies",
    total: 12,
    icon: "/assets/badges/buddies.svg",
  },
  {
    id: 3,
    title: "Total Organizations",
    total: 12,
    icon: "/assets/badges/organizations.svg",
  },
  {
    id: 4,
    title: "Total Projects",
    total: 12,
    icon: "/assets/badges/projects.svg",
  },
];

const DashboardBadges = () => {
  return (
    <div className="grid grid-cols-custom-badge-layout gap-[23px]">
      {contentBadgesData.map((badge) => {
        return <BadgeCard key={badge.id} {...badge} />;
      })}
    </div>
  );
};

export default DashboardBadges;
