"use client";
import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase/config";

import Image from "next/image";

import SignupHeading from "@/components/auth/signup/SignupHeading";
import SignupAuth from "@/components/auth/signup/SignupAuth";
import PasswordInput from "@/components/auth/shared/PasswordInput";
import EmailInput from "@/components/auth/shared/EmailInput";

import formShape from "@/public/formShape.png";
import { useRouter } from "next/navigation";

const SignupForm = () => {
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

  const handleSignUpAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userAuth.email,
        userAuth.password
      );
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-[13.98px] pl-28 pt-10 pr-14 pb-52 relative">
      <SignupHeading />

      <form className="flex flex-col gap-3">
        <EmailInput getEmail={getEmail} />
        <PasswordInput getPassword={getPassword} />
        <SignupAuth handleSignUpAuth={handleSignUpAuth} />
      </form>

      <Image
        className="absolute bottom-0 left-0"
        src={formShape}
        alt="form shapes"
      />
    </div>
  );
};

export default SignupForm;
