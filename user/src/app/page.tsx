import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
    const res = await axios.get("http://localhost:3005");
    setMessage(res.data);
  };
  return (
    <>
    <p className="mb-7">Message down here</p>
    <p>{message}</p>
      {/* <div className="flex">
        <div className="w-[40vw] ">text</div>
        <div className="md:">
          <Image
            src={"/arcane.jpg"}
            alt="login img"
            className="rounded-[2rem]"
            width={800}
            height={500}
            layout="responsive"
            sizes="(max-width:768px) 50vw"
          />
        </div>
      </div> */}
    </>
  );
}
