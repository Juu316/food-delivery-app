"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  useEffect(() => {
    validateEmail();
}, [email]);
  // const getMessage = async () => {
  //   const res = await axios.get("http://localhost:3005");
  //   setMessage(res.data);
  // };
  // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validateEmail = ()=>{
  let errors = {};
  if (!email) {
    errors.email = 'Email is required.';
} else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid.';
}
setErrors(errors);
setIsEmailValid(Object.keys(errors).length === 0)
}
  return (
    <>
      <div className="flex ml-[1vw] mr-[1vw] mt-[3vh] pb-[3vh]">
        <div className="w-[49vw] flex justify-center ">
          <div className="w-[23vw] flex flex-col gap-6">
            <Button variant="outline" size="icon">
              <ChevronRight />
            </Button>
            <div className="login-top">Create your account
            <span className="login-mid inline-block">
              Sign up to explore your favorite dishes.</span>
            </div>
            <input className="rounded-md w-full border-[#e4e4e7] border h-[2.25rem]" placeholder=" Enter your email address" onChange={ (e) => {setEmail(e.target.value)} }/>
            {errors.email && <p >{errors.email}</p>}
            <div>
              <button className="w-full opacity-[20%] bg-[#18181B]">Let&apos;s go</button>
            </div>
            <div>
              Already have an account? <span>Log in</span>
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
