import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};

export const PasswordStep = ({ setStep }: EmailStepProps) => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [validatingError, setValidatingError] = useState(
    "Password must contain at least one number and one symbol."
  );
  const [matchingError, setMatchingError] = useState("Passwords do not match.");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validatePassword = (password: string): boolean => {
    // Regex to check for at least one number and one symbol
    const regex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!regex.test(password)) {
      setValidatingError(
        "Password must contain at least one number and one symbol."
      );
      return false;
    }
    setValidatingError("");
    return true;
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = (e.target as HTMLInputElement).value;
    setPassword(value);
    if (value) {
      validatePassword(value);
    } else {
      setValidatingError("");
    }
    if (value !== confirmPassword) {
      setMatchingError("Passwords do not match.");
    } else {
      setMatchingError("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setMatchingError("Passwords do not match.");
    } else {
      setMatchingError("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      document.getElementById("submitButton")?.click();
    }
  };
  const handleSubmit = () => {
    setStep("login");
  };
  const handleTopLeftButton = () => {
    setStep("email");
  };

  useEffect(() => {
    if (validatingError !== "" || matchingError !== "") {
      setIsPasswordValid(false);
    }
    if (validatingError === "" && matchingError === "") {
      setIsPasswordValid(true);
    }
  }, [validatingError, matchingError]);
  return (
    <>
      <div className="w-[25vw] flex flex-col gap-6">
        <Button onClick={handleTopLeftButton} variant="outline" size="icon">
          <ChevronRight />
        </Button>
        <div className="login-top">
          Create a strong password
          <br />
          <span className="login-mid">
            Create a strong password with letters and numbers.
          </span>
        </div>
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          className={`rounded-md w-full border h-[2.25rem] pl-3 ${
            validatingError
              ? "border-[#ef4444] border-opacity-50"
              : "border-gray-300"
          }`}
          placeholder="Password"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          value={password}
        />
        <input
          id="checkpassword"
          className={`rounded-md w-full border h-[2.25rem] pl-3 ${
            matchingError
              ? "border-[#ef4444] border-opacity-50"
              : "border-gray-300"
          }`}
          placeholder="Confirm"
          type={isPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onKeyDown={handleKeyDown}
        />
        {validatingError && <p className="login-warning">{validatingError}</p>}
        {matchingError && <p className="login-warning">{matchingError}</p>}
        <div className="flex items-center">
          <Checkbox onCheckedChange={togglePasswordVisibility} />
          <span className="ml-2">Show password</span>
        </div>
        <div>
          <button
            id="submitButton"
            onClick={handleSubmit}
            disabled={!isPasswordValid}
            className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
            style={{
              opacity: isPasswordValid ? 1 : 0.2,
              cursor: isPasswordValid ? "pointer" : "not-allowed",
            }}>
            Let&apos;s go
          </button>
        </div>
        <div className="inline-block">
          Already have an account?
          <span className="text-[#2563EB] cursor-pointer inline-block p-2">
            Log in
          </span>
        </div>
      </div>
    </>
  );
};
