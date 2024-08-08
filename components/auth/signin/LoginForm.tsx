"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase/config";

import PasswordInput from "@/components/auth/shared/PasswordInput";
import EmailInput from "@/components/auth/shared/EmailInput";

import SigninHeading from "@/components/auth/signin/SigninHeading";
import SigninAuth from "@/components/auth/signin/SigninAuth";
import ForgotLink from "@/components/auth/shared/ForgotLink";

import formShape from "@/public/formShape.png";

const LoginForm = () => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });

  const getEmail = (value: string) => {
    setUserAuth((prev) => {
      return {
        ...prev,
        email: value,
      };
    });
  };

  const getPassword = (value: string) => {
    setUserAuth((prev) => {
      return {
        ...prev,
        password: value,
      };
    });
  };

  const handleLoginAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userAuth.email, userAuth.password);
      router.push("/monitor");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-[13.98px] pl-28 pt-10 pr-14 pb-52 relative">
      <SigninHeading />

      <form className="flex flex-col gap-3">
        <EmailInput getEmail={getEmail} />
        <PasswordInput getPassword={getPassword} />
        <ForgotLink />
        <SigninAuth handleLoginAuth={handleLoginAuth} />
      </form>

      <Image
        className="absolute bottom-0 left-0"
        src={formShape}
        alt="form shapes"
      />
    </div>
  );
};

export default LoginForm;
