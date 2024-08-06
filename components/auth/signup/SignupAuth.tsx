import React from "react";

const SignupAuth = ({
  handleSignUpAuth,
}: {
  handleSignUpAuth: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}) => {
  return (
    <button
      onClick={handleSignUpAuth}
      className="bg-[#1E00B9] text-white font-semibold text-[1.4rem] py-2 px-12 rounded-[6.99px] w-fit mx-auto"
    >
      Signup
    </button>
  );
};

export default SignupAuth;
