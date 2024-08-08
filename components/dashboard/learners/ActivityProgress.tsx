const ActivityProgress = () => {
  return (
    <div className="bg-[#E9E6F8] p-6 rounded-2xl flex-1">
      <div className="flex flex-col items-center">
        <div>
          <p className="text-[#1E00B9] font-semibold text-xl">
            Overall Activity
          </p>
          <p className="text-[#8C8A96] font-medium text-base max-w-52">
            Hours spent by organizations starting from January
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-40 h-40">
            <svg className="absolute inset-0 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#E0CFF7"
                stroke-width="10"
                fill="transparent"
              />
            </svg>
            <svg className="absolute inset-0 w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                stroke="#2B0B8A"
                stroke-width="10"
                stroke-dasharray="290"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1E00B9] font-extrabold text-3xl">
              <span>200</span>
              <span>hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityProgress;
