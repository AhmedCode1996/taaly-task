import DashboardBadges from "./badges/DashboardBadges";
import DashboardCarousel from "./carousel/DashboardCarousel";
import DashboardStatistics from "./DashboardStatistics";

const MainContent = () => {
  return (
    <div className="rounded-2xl bg-[#e9e6f8] p-4 grid grid-rows-custom-dashboard-layout gap-4">
      <DashboardBadges />
      <DashboardStatistics />
      <DashboardCarousel />
    </div>
  );
};

export default MainContent;
