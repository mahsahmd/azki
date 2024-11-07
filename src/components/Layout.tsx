import Image from "next/image";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row-reverse h-full w-full">
        <div className="absolute md:w-[600px] md:h-52 w-64 h-28 bottom-32 md:bottom-6 left-4">
          <Image
            src="/images/car-green.svg"
            alt="Green car illustration"
            layout="fill"
            priority
          />
        </div>

        <div className="bg-secondary h-full w-full  md:max-w-80 max-h-32 md:max-h-none"></div>
        <div className="w-full h-full mt-16 md:m-0 md:pr-32 md:px-0 p-4 flex flex-col items-start gap-8  md:justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
