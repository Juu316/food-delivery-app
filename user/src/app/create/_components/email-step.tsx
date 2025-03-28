import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};

type ErrorType = {
  email: string;
};

export const EmailStep = ({ setStep }: EmailStepProps) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<ErrorType>({} as ErrorType);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    validateEmail();
  }, [email]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const submitButton = document.getElementById(
        "submitButton"
      ) as HTMLButtonElement;
      submitButton.click();
    }
  };
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

  const handleSubmit = async () => {
    try{
      const response = await axios.post("http://localhost:3000", {email});
      console.log(response.data)
      setStep("password");

    }catch(error){console.log("Error saving email:", error)}
    
  };
  const handleClickBlue = () => {
    setStep("login");
  };
  const handleTopLeftButton=()=>{
    setStep("login")
}
  return (
    <div className="w-[25vw] flex flex-col gap-6">
      <Button onClick={handleTopLeftButton} variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <div className="login-top">
        Create your account
        <br />
        <span className="login-mid">
          Sign up to explore your favorite dishes.
        </span>
      </div>
      <input
        type="email"
        className={`rounded-md w-full border h-[2.25rem] pl-3 ${errors.email ? "border-[#ef4444] border-opacity-50" : "border-gray-300"}`}
        placeholder="Enter your email address"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
      {errors.email && <p className="login-warning">{errors.email}</p>}
      <div>
        <button
          // onChange={validateEmail()}
          id="submitButton"
          onClick={handleSubmit}
          className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
          disabled={!isEmailValid}
          style={{
            opacity: isEmailValid ? 1 : 0.2,
            cursor: isEmailValid ? "pointer" : "not-allowed",
          }}>
          Let&apos;s go
        </button>
      </div>
      <div className="inline-block">
        Already have an account?{" "}
        <span
          onClick={handleClickBlue}
          className="text-[#2563EB] cursor-pointer inline-block p-2">
          Log in
        </span>
      </div>
    </div>
  );
};
