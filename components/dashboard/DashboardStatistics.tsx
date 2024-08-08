import LearnersHeader from "./learners/LearnersHeader";
import LearnersTab from "./learners/LearnersTab";
import LearnersTable from "./learners/LearnersTable";

const DashboardStatistics = () => {
  return (
    <div className="py-6 px-4 bg-white rounded-2xl">
      <div className="p-2">
        <LearnersTab />
        <LearnersHeader />
      </div>
      <LearnersTable />
    </div>
  );
};

export default DashboardStatistics;
