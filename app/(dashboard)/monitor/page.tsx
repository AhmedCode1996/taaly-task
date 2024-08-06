import LeanersActivity from "@/components/dashboard/LeanersActivity";
import Sidebar from "../_components/Sidebar";
import MainContent from "@/components/dashboard/MainContent";

const MonitorPage = () => {
  return (
    <div className="grid grid-cols-custom-layout gap-4">
      <Sidebar />
      <MainContent />
      <LeanersActivity />
    </div>
  );
};

export default MonitorPage;
