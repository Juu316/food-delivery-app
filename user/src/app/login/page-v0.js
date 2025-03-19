import React, { useState, useEffect } from "react";
import Image from "next/image";
//import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  useEffect(() => {
    validateEmail();
  }, [email]);
  // const getMessage = async () => {
  //   const res = await axios.get("http://localhost:3005");
  //   setMessage(res.data);
  // };

  const validateEmail = () => {
    let errors = {};
    if (!email) {
      errors.email = "";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email. Use a format like example@email.com";
    }
    setErrors(errors);
    setIsEmailValid(Object.keys(errors).length === 0);
  };

  return (
    <>
      <div className="flex ml-[1vw] mr-[1vw] mt-[3vh] pb-[3vh]">
        <div className="w-[49vw] flex justify-center mt-[20vh]">
          <div className="w-[25vw] flex flex-col gap-6">
            <Button variant="outline" size="icon">
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
              className="rounded-md w-full border h-[2.25rem] pl-3"
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ borderColor: errors ? "#e4e4e7" : "#ef4444" }}></input>
            {errors.email && <p className="login-warning">{errors.email}</p>}
            <div>
              <button
                // onChange={validateEmail()}
                className="w-full  bg-[#18181B] text-[#fafafa] rounded-md h-[2.25rem]"
                style={{
                  opacity: isEmailValid ? 1 : 0.2,
                  cursor: isEmailValid ? "pointer" : "not-allowed",
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
    </>
  );
}
