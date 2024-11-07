import Image from "next/image";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row-reverse h-full w-full">
        <div className="absolute  md:h-72 md:w-[800px] w-60 h-28 bottom-32 md:bottom-6 left-4">
          <Image src="/images/car-green.svg" alt="car" layout="fill" priority />
        </div>

        <div className="bg-secondary h-full w-full  md:max-w-80 max-h-32 md:max-h-none"></div>
        <div className="w-full h-full mt-16 md:m-0 md:pt-60 md:pr-32 md:px-0 p-4 flex flex-col  gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};
