import React from "react";

const SigninAuth = ({
  handleLoginAuth,
}: {
  handleLoginAuth: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}) => {
  return (
    <button
      onClick={handleLoginAuth}
      className="bg-[#1E00B9] text-white font-semibold text-[1.4rem] py-2 px-12 rounded-[6.99px] w-fit mx-auto"
    >
      login
    </button>
  );
};

export default SigninAuth;
