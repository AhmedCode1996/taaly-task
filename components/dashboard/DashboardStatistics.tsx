import LearnersHeader from "./learners/LearnersHeader";
import LearnersTable from "./learners/LearnersTable";
import LearnersTab from "./learners/LearnersTab";

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
