import Image from "next/image";

import notificationIcon from "@/public/notification.png";

const name = "ahmed";

const Profile = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image
        src={notificationIcon}
        alt="header notification icon"
        className="cursor-pointer"
      />
      <p className="capitalize text-[#04001A] font-bold text-[1.625rem]">
        <span>hi,</span>
        <span>{name}</span>
      </p>
    </div>
  );
};

export default Profile;
