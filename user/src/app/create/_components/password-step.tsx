import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type EmailStepProps = {
  setStep: Dispatch<SetStateAction<string>>;
};

export const PasswordStep = ({ setStep }: EmailStepProps) => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatching, setIsPasswordMatching] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validatePassword = (password) => {
    // Regex to check for at least one number and one symbol
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!regex.test(password)) {
      setError("Password must contain at least one number and one symbol.");

      return false;
    }
    setError("");
    return true;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value) {
      validatePassword(value);
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (password && value !== password) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      document.getElementById("submitButton").click();
    }
  };
  const handleSubmit = () => {
    setStep("login");
  };
  return (
    <>
      <div className="w-[25vw] flex flex-col gap-6">
        <Button variant="outline" size="icon">
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
          className="rounded-md w-full border h-[2.25rem] pl-3"
          placeholder="Password"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          value={password}
          // style={{ borderColor: errors ? "#e4e4e7" : "#ef4444" }}
        />
        <input
          id="checkpassword"
          className="rounded-md w-full border h-[2.25rem] pl-3"
          placeholder="Confirm"
          type={isPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onKeyDown={handleKeyDown}
        />
        {error && <p className="login-warning">{error}</p>}
        <div>
          <input onChange={togglePasswordVisibility} type="checkbox" /> Show
          password
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
          Already have an account?{" "}
          <span className="text-[#2563EB] cursor-pointer inline-block p-2">
            Log in
          </span>
        </div>
      </div>
    </>
  );
};
