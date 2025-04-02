import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};
type ErrorType = {
    email: string;
  };
export const ResetPasswordStep = ({ setStep }: EmailStepProps) => {
  const [errors, setErrors] = useState<ErrorType>({} as ErrorType);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const submitButton = document.getElementById(
        "submitButton"
      ) as HTMLButtonElement;
      submitButton.click();
    }
  };
  const handleSubmit = () => {
    console.log("Node mailer hiih ym bishuu");
  };
  const handleClickBlue = () => {
    setStep("email");
  };
  const handleTopLeftButton = () => {
    setStep("login");
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
          Reset your password
          <br />
          <span className="login-mid">
          Enter your email to receive a password reset link.
          </span>
        </div>
        <input
          type="email"
          className={`rounded-md w-full border h-[2.25rem] pl-3 ${
            errors.email
              ? "border-[#ef4444] border-opacity-50"
              : "border-gray-300"
          }`}
          placeholder="Enter your email address"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p className="login-warning">{errors.email}</p>}
        <div>
          <button
            id="submitButton"
            onClick={handleSubmit}
            className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
            disabled={!isEmailValid}
            style={{
              opacity: isEmailValid ? 1 : 0.2,
              cursor: isEmailValid ? "pointer" : "not-allowed",
            }}>
            Send link
          </button>
        </div>
        <div className="inline-block">
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
