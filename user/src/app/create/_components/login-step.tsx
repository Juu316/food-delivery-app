import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
//import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};

export const LoginStep = ({ setStep }: EmailStepProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const handleClickBlue = ()=>{
    setStep("email")
}
const handleTopLeftButton=()=>{
    setStep("email")
}
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      document.getElementById("submitButton")?.click();
    }
  };
  return (
    <>
      <div className="w-[25vw] flex flex-col gap-6">
        <Button onClick={handleTopLeftButton} variant="outline" size="icon">
          <ChevronRight />
        </Button>
        <div className="login-top">
          Log in
          <br />
          <span className="login-mid">
            Log in to enjoy your favorite dishes.
          </span>
        </div>
        <input
          className="rounded-md w-full border h-[2.25rem] pl-3"
          placeholder="Enter your email address"
        />
        <input
          className="rounded-md w-full border h-[2.25rem] pl-3"
          placeholder="Password"
          type={isPasswordVisible ? "text" : "password"}
          onKeyDown={handleKeyDown}
        />

        <div>
          <input onChange={togglePasswordVisibility} type="checkbox" /> Show
          password
        </div>
        <div>
          <button
            id="submitButton"
            
            
            className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
            // style={{
            //   opacity: isPasswordValid ? 1 : 0.2,
            //   cursor: isPasswordValid ? "pointer" : "not-allowed",
            // }}
            >
            Let&apos;s go
          </button>
        </div>
        <div className="inline-block">
          Don&apos;t have an account?{" "}
          <span onClick={handleClickBlue} className="text-[#2563EB] cursor-pointer inline-block p-2">
            Sign up
          </span>
        </div>
      </div>
    </>
  );
};
