import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
//import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};
type ErrorType = {
  email: string;
};
export const LoginStep = ({ setStep }: EmailStepProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<ErrorType>({} as ErrorType);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validateEmail = () => {
    const errors = {} as ErrorType;

    if (!email) {
      errors.email = "";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email. Use a format like example@email.com";
    }
    setErrors(errors);
    setIsEmailValid(Object.keys(errors).length === 0);
  };
  const handleClickForgotPassword = () => {
    setStep("resetPassword");
  };
  const handleClickBlue = () => {
    setStep("email");
  };
  const handleTopLeftButton = () => {
    setStep("email");
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      document.getElementById("submitButton")?.click();
    }
  };
  useEffect(() => {
    validateEmail();
  }, [email]);
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
        <input className={`rounded-md w-full border h-[2.25rem] pl-3 ${
          errors.email
            ? "border-[#ef4444] border-opacity-50"
            : "border-gray-300"
        }`}
          
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        {errors.email && <p className="login-warning">{errors.email}</p>}
        <input
          className="rounded-md w-full border h-[2.25rem] pl-3"
          placeholder="Password"
          type={isPasswordVisible ? "text" : "password"}
          onKeyDown={handleKeyDown}
        />

        <div className="flex justify-between">
          <div>
            <input onChange={togglePasswordVisibility} type="checkbox" /> Show
            password
          </div>

          <span
            onClick={handleClickForgotPassword}
            className="underline hover:cursor-pointer">
            Forgot password ?
          </span>
        </div>

        <div>
          <button
            id="submitButton"
            className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
            disabled={!isEmailValid}
            style={{
              opacity: isEmailValid ? 1 : 0.2,
              cursor: isEmailValid ? "pointer" : "not-allowed",
            }}
          >
            Let&apos;s go
          </button>
        </div>
        <div className="inline-block text-muted-foreground">
          Don&apos;t have an account?
          <span
            onClick={handleClickBlue}
            className="text-[#2563EB] cursor-pointer inline-block p-2">
            Sign up
          </span>
        </div>
      </div>
    </>
  );
};
