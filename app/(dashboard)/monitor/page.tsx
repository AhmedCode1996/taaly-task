import LeanersActivity from "@/components/dashboard/learners/LeanersActivity";
import Sidebar from "../../../components/navbar/Sidebar";
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
