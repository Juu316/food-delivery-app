"use client";

import { useState } from "react";
import { EmailStep } from "./_components/email-step";
import { PasswordStep } from "./_components/password-step";
import {LoginStep} from "./_components/login-step";
import Image from "next/image";

export default function Create() {
  const [step, setStep] = useState("email");

  return (
    <div className="flex ml-[1vw] mr-[1vw] mt-[3vh] pb-[3vh]">
      <div className="flex ml-[1vw] mr-[1vw] mt-[3vh] pb-[3vh]">
        <div className="w-[49vw] flex justify-center mt-[20vh]">
          {step === "email" && <EmailStep setStep={setStep} />}
          {step === "password" && <PasswordStep setStep={setStep}/>}
          {step === "login" && <LoginStep setStep={setStep}/>}
        </div>
      </div>

      <div className="relative w-[49vw] h-[94vh]">
        <Image
          src={"/login.jpeg"}
          alt="login img"
          fill
          className="rounded-[2rem]"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
