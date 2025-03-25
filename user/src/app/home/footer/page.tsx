import Ticker from "./_components/Ticker";
export default function Footer() {
  const newsItems = [
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
    "Fresh food delivered ",
  ];
  return (
    <>
      <div className="w-full bg-primary pt-[3.75rem]">
        <div className="flex items-center bg-red-500 w-full h-24 ">
          <div className="w-full text-3xl font-semibold tracking-[-2.5%] overflow-hidden text-primary-foreground ">
            <Ticker items={newsItems} />
          </div>
        </div>
        <div className="mt-[76px] "></div>
      </div>
    </>
  );
}
