import AttendanceProgress from "./AttendanceProgress";
import ActivityProgress from "./ActivityProgress";
import ActivitySettings from "./ActivitySettings";

const LeanersActivity = () => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      <ActivityProgress />
      <AttendanceProgress />
      <ActivitySettings />
    </div>
  );
};

export default LeanersActivity;
