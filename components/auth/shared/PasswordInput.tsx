"use client";

import { useState } from "react";

interface InputProps {
  getPassword: (value: string) => void;
}

const PasswordInput = ({ getPassword }: InputProps) => {
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setPassword(newValue);
    getPassword(newValue);
  };

  return (
    <p>
      <label
        htmlFor="password"
        className="block capitalize font-semibold text-[1.44rem]"
      >
        password
      </label>
      <input
        value={password}
        onChange={handlePasswordChange}
        className="rounded-[6.99px] border-[.87px] border-[#B1B0B8] py-[13.98px] px-[20.96px] w-[26.5rem] text-gray-700 font-medium text-[1.375rem]"
        type="password"
        id="password"
        placeholder="6+ strong characters"
      />
    </p>
  );
};

export default PasswordInput;
