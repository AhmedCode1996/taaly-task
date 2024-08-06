import Image from "next/image";

const LeanersActivity = () => {
  return (
    <div className="flex flex-col gap-4 justify-between">
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
      <div className="flex flex-col items-center bg-[#E9E6F8] p-6 rounded-2xl flex-1">
        <h3 className="text-[#1E00B9] font-semibold text-xl capitalize w-full px-5 mb-2">
          attendance
        </h3>
        <div className="relative w-40 h-40 mb-6">
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#988ADF"
              stroke-width="10"
              fill="transparent"
            />
          </svg>
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              stroke="#2B0B8A"
              stroke-width="10"
              stroke-dasharray="400"
              stroke-dashoffset="85"
              stroke-linecap="round"
              fill="transparent"
            />
          </svg>
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="32%"
              stroke="#DDF1A5"
              stroke-width="10"
              fill="transparent"
            />
          </svg>
          <svg className="absolute inset-0 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="32%"
              stroke="#B4E13C"
              stroke-width="10"
              stroke-dasharray="201.1"
              stroke-dashoffset="30"
              stroke-linecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent">
              <path
                d="M25 31.8793C26.3882 32.2833 27.8563 32.5 29.3749 32.5C31.8395 32.5 34.1709 31.9294 36.244 30.913C36.2479 30.8175 36.2499 30.7215 36.2499 30.625C36.2499 26.828 33.1719 23.75 29.3749 23.75C27.0115 23.75 24.9267 24.9425 23.6893 26.7587M25 31.8793V31.875C25 30.0202 24.5247 28.2763 23.6893 26.7587M25 31.8793C25 31.9387 24.9995 31.998 24.9985 32.0572C21.8956 33.9254 18.2608 35 14.375 35C10.4892 35 6.8544 33.9254 3.75153 32.0572C3.75051 31.9966 3.75 31.9359 3.75 31.875C3.75 26.007 8.50697 21.25 14.375 21.25C18.3882 21.25 21.8817 23.475 23.6893 26.7587M20 10.625C20 13.7316 17.4816 16.25 14.375 16.25C11.2684 16.25 8.75 13.7316 8.75 10.625C8.75 7.5184 11.2684 5 14.375 5C17.4816 5 20 7.5184 20 10.625ZM33.75 14.375C33.75 16.7912 31.7912 18.75 29.375 18.75C26.9588 18.75 25 16.7912 25 14.375C25 11.9588 26.9588 10 29.375 10C31.7912 10 33.75 11.9588 33.75 14.375Z"
                stroke="#8C8A96"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-4 justify-between">
            <span className="text-[#8C8A96] font-medium text-xl">Learners</span>
            <span className="text-[#1E00B9] font-bold text-[2.25rem]">91%</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-[#8C8A96] font-medium text-xl max-w-10 leading-7">
              Language Buddies
            </span>
            <span className="text-[#B4E13C] font-bold text-[2.25rem]">95%</span>
          </div>
        </div>
      </div>
      <div className="bg-[#1E00B9] text-white rounded-2xl p-9 flex flex-col gap-4 text-center items-center">
        <Image
          src="/assets/statistics/settings.svg"
          alt="settings icon"
          width={40}
          height={42}
        />
        <p className="capitalize font-semibold text-[1.625rem]">
          manage
          <br />
          organizations
        </p>
      </div>
    </div>
  );
};

export default LeanersActivity;
