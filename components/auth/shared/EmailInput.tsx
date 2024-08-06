"use client";

import { useState } from "react";

interface InputProps {
  getEmail: (value: string) => void;
}

const EmailInput = ({ getEmail }: InputProps) => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setEmail(newValue);
    getEmail(newValue);
  };

  return (
    <p>
      <label
        htmlFor="email"
        className="block capitalize font-semibold text-[1.44rem]"
      >
        email
      </label>
      <input
        value={email}
        onChange={handleEmailChange}
        className="rounded-[6.99px] border-[.87px] border-[#B1B0B8] py-[13.98px] px-[20.96px] w-[26.5rem] text-gray-700 font-medium text-[1.375rem] "
        type="text"
        id="email"
        placeholder="Example@mail.com"
      />
    </p>
  );
};

export default EmailInput;
