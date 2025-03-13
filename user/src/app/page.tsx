import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex">
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
      </div>
    </>
  );
}
