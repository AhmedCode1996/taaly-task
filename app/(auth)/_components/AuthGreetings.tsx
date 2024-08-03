import Image from "next/image";

import greetingImage from "@/public/authGreetings.png";

const AuthGreetings = () => {
  return (
    <div className="relative z-10 p-4 bg-[#1E00B9] text-white flex flex-col items-center justify-center gap-14 rounded-[13.98px] mr-[-56px] pt-12">
      <Image src={greetingImage} alt="authentication greeting image" />
      <p className="font-semibold text-3xl max-w-md text-center ">
        ‘Het verbinden van nieuwkomers met de samenleving door hun taal te
        verbeteren’
      </p>
    </div>
  );
};

export default AuthGreetings;
