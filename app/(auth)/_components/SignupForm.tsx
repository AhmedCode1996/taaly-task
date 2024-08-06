"use client";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/firebase/config";

import Image from "next/image";
import Link from "next/link";

import formShape from "@/public/formShape.png";

const SignupForm = () => {
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });
  const handleSignUpAuth = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      userAuth.email,
      userAuth.password
    );
    setUserAuth({
      email: "",
      password: "",
    });
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded-[13.98px] pl-28 pt-10 pr-14 pb-52 relative">
      <h2 className="text-3xl text-[#04001A] font-semibold">
        Welcome to{" "}
        <strong className="font-extrabold text-[2.25rem]">Tally!</strong>
      </h2>
      <h3 className="text-[#04001A] font-semibold text-3xl my-2.5">
        signup here
      </h3>
      <form className="flex flex-col gap-3">
        <p>
          <label
            htmlFor="email"
            className="block capitalize font-semibold text-[1.44rem]"
          >
            email
          </label>
          <input
            value={userAuth.email}
            onChange={(e) =>
              setUserAuth((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
            className="rounded-[6.99px] border-[.87px] border-[#B1B0B8] py-[13.98px] px-[20.96px] w-[26.5rem] placeholder-[#E6E6E8] placeholder-form "
            type="text"
            id="email"
            placeholder="Example@mail.com"
          />
        </p>
        <p>
          <label
            htmlFor="password"
            className="block capitalize font-semibold text-[1.44rem]"
          >
            password
          </label>
          <input
            value={userAuth.password}
            onChange={(e) =>
              setUserAuth((prev) => {
                return {
                  ...prev,
                  password: e.target.value,
                };
              })
            }
            className="rounded-[6.99px] border-[.87px] border-[#B1B0B8]  py-[13.98px] px-[20.96px] w-[26.5rem] placeholder-form"
            type="password"
            id="password"
            placeholder="6+ strong characters"
          />
        </p>
        <Link
          href="#"
          className="text-[#B1B0B8] font-medium text-[0.875rem] text-center w-fit mx-auto"
        >
          forgot password?
        </Link>
        <button
          onClick={handleSignUpAuth}
          className="bg-[#1E00B9] text-white font-semibold text-[1.4rem] py-2 px-12 rounded-[6.99px] w-fit mx-auto"
        >
          Signup
        </button>
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
